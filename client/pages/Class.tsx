import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const schoolClasses = ["9", "10", "11", "12"];
const collegeYears = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export default function Class() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const studentType = searchParams.get("type") || "school";
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classes = studentType === "school" ? schoolClasses : collegeYears;
  const pageTitle =
    studentType === "school" ? "Select Your Class" : "Select Your Year";
  const pageSubtitle =
    studentType === "school"
      ? "Choose your current class to access relevant notes"
      : "Choose your current academic year";

  const handleSelect = (classValue: string) => {
    setSelectedClass(classValue);
    navigate(
      `/subject?type=${studentType}&class=${encodeURIComponent(classValue)}`,
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
                {pageTitle}
              </h1>
              <p className="text-lg text-muted-foreground">{pageSubtitle}</p>
            </div>

            {/* Class Selection Grid */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {classes.map((classItem) => (
                  <button
                    key={classItem}
                    onClick={() => handleSelect(classItem)}
                    className={`group relative rounded-xl p-6 md:p-8 transition-all duration-300 transform hover:scale-105 cursor-pointer font-semibold text-center ${
                      selectedClass === classItem
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-border hover:border-primary text-foreground"
                    }`}
                  >
                    <div className="text-xl md:text-2xl mb-2">
                      {studentType === "school" ? "📚" : "🎓"}
                    </div>
                    <div className="text-lg md:text-xl">{classItem}</div>
                  </button>
                ))}
              </div>

              {/* Info Card */}
              <div className="mt-16 p-8 bg-accent/5 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-2xl">ℹ️</span> Finding the right level
                </h3>
                <p className="text-muted-foreground text-sm">
                  {studentType === "school"
                    ? "Select the class you're currently studying in. Notes are curated specifically for your class curriculum and board requirements."
                    : "Select your current academic year to access notes tailored to your university curriculum and course requirements."}
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
