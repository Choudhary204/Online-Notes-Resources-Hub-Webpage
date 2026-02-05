import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const schoolSubjects = [
  { name: "Mathematics", icon: "🔢" },
  { name: "English", icon: "📝" },
  { name: "Science", icon: "🧪" },
  { name: "Social Studies", icon: "🌍" },
  { name: "History", icon: "🏛️" },
  { name: "Geography", icon: "🗺️" },
  { name: "Computer Science", icon: "💻" },
  { name: "Hindi", icon: "🏮" },
];

const collegeSubjects = [
  { name: "Mathematics", icon: "🔢" },
  { name: "Physics", icon: "⚛️" },
  { name: "Chemistry", icon: "🧬" },
  { name: "Computer Science", icon: "💻" },
  { name: "Programming", icon: "👨‍💻" },
  { name: "Data Structures", icon: "📊" },
  { name: "Database Management", icon: "🗄️" },
  { name: "Web Development", icon: "🌐" },
];

export default function Subject() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const studentType = searchParams.get("type") || "school";
  const selectedClass = searchParams.get("class") || "";
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = studentType === "school" ? schoolSubjects : collegeSubjects;

  const handleSelect = (subjectName: string) => {
    setSelectedSubject(subjectName);
    navigate(
      `/notes-type?type=${studentType}&class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(subjectName)}`,
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 via-white to-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <button
                onClick={() => navigate(-1)}
                className="text-primary hover:text-primary/80 flex items-center gap-2 mb-8 transition-colors"
              >
                <span>←</span> Go back
              </button>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Select a Subject
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose from {subjects.length} available subjects for{" "}
                <span className="font-semibold text-foreground">
                  {selectedClass}
                </span>
              </p>
            </div>

            {/* Subject Selection Grid */}
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {subjects.map((subject) => (
                  <button
                    key={subject.name}
                    onClick={() => handleSelect(subject.name)}
                    className={`group relative rounded-xl p-6 md:p-8 transition-all duration-300 transform hover:scale-105 cursor-pointer text-center ${
                      selectedSubject === subject.name
                        ? "bg-accent text-accent-foreground shadow-lg"
                        : "bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-border hover:border-accent text-foreground"
                    }`}
                  >
                    <div className="text-3xl md:text-4xl mb-3">
                      {subject.icon}
                    </div>
                    <div className="font-semibold text-sm md:text-base leading-tight">
                      {subject.name}
                    </div>
                  </button>
                ))}
              </div>

              {/* Breadcrumb */}
              <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">Progress:</span>{" "}
                  {studentType === "school" ? "Class" : "Year"} {selectedClass}{" "}
                  → Subject Selection
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
