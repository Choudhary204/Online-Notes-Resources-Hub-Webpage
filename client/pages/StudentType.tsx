import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function StudentType() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<"school" | "college" | null>(null);

  const handleSelect = (type: "school" | "college") => {
    setSelectedType(type);
    // Navigate with type as query param or in state
    navigate(`/class?type=${type}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-white to-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                What's Your Student Status?
              </h1>
              <p className="text-lg text-muted-foreground">
                Select your category to access notes tailored specifically for your curriculum
              </p>
            </div>

            {/* Student Type Selection Cards */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* School Student Card */}
                <div
                  className={`relative group rounded-2xl p-8 md:p-12 transition-all duration-300 transform hover:scale-105 text-left ${
                    selectedType === "school"
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
                      : "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/50 text-foreground"
                  }`}
                >
                  <div className="absolute top-6 right-6 text-4xl md:text-5xl opacity-20">
                    📚
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">School Student</h2>
                    <p className="text-sm md:text-base mb-6 opacity-90">
                      Class 9-12 • CBSE/ICSE/State Boards
                    </p>

                    <ul className="space-y-3 mb-8 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Complete syllabus coverage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Board exam preparation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Easy-to-understand language
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span> Quick revision notes
                      </li>
                    </ul>

                    <button
                      onClick={() => handleSelect("school")}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedType === "school"
                          ? "bg-primary-foreground text-primary hover:bg-opacity-90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      Continue as School Student
                    </button>
                  </div>
                </div>

                {/* College Student Card */}
                <div
                  className={`relative group rounded-2xl p-8 md:p-12 transition-all duration-300 transform hover:scale-105 text-left ${
                    selectedType === "college"
                      ? "bg-gradient-to-br from-accent to-accent/80 text-accent-foreground shadow-xl"
                      : "bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 hover:border-accent/50 text-foreground"
                  }`}
                >
                  <div className="absolute top-6 right-6 text-4xl md:text-5xl opacity-20">
                    🎓
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">College Student</h2>
                    <p className="text-sm md:text-base mb-6 opacity-90">
                      Graduation & Post-Graduation
                    </p>

                    <ul className="space-y-3 mb-8 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="font-bold">✓</span> Advanced course materials
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="font-bold">✓</span> University-focused content
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="font-bold">✓</span> In-depth explanations
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="font-bold">✓</span> Research & reference materials
                      </li>
                    </ul>

                    <button
                      onClick={() => handleSelect("college")}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedType === "college"
                          ? "bg-accent-foreground text-accent hover:bg-opacity-90"
                          : "bg-accent text-accent-foreground hover:bg-accent/90"
                      }`}
                    >
                      Continue as College Student
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-slate-50 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-3">Why does this matter?</h3>
              <p className="text-muted-foreground text-sm">
                We organize notes by your educational level to ensure you get the most relevant and appropriate study materials. Your selection helps us provide accurate content that matches your curriculum and difficulty level.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
