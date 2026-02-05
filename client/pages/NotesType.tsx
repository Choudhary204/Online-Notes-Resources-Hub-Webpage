import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function NotesType() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const studentType = searchParams.get("type") || "school";
  const selectedClass = searchParams.get("class") || "";
  const selectedSubject = searchParams.get("subject") || "";
  const [selectedType, setSelectedType] = useState<"short" | "long" | null>(
    null,
  );

  const handleSelect = (type: "short" | "long") => {
    setSelectedType(type);
    navigate(
      `/notes?type=${studentType}&class=${encodeURIComponent(selectedClass)}&subject=${encodeURIComponent(selectedSubject)}&notesType=${type}`,
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
                What Type of Notes Do You Need?
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose between quick summaries or comprehensive notes for{" "}
                <span className="font-semibold text-foreground">
                  {selectedSubject}
                </span>
              </p>
            </div>

            {/* Notes Type Selection */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Short Notes Card */}
                <div
                  className={`relative group rounded-2xl p-8 md:p-12 transition-all duration-300 transform hover:scale-105 text-left ${
                    selectedType === "short"
                      ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-xl"
                      : "bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 hover:border-secondary/50 text-foreground"
                  }`}
                >
                  <div className="absolute top-6 right-6 text-4xl md:text-5xl opacity-20">
                    ⚡
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Short Notes
                    </h2>
                    <p className="text-sm md:text-base mb-8 opacity-90">
                      Perfect for last-minute revision and quick reference
                    </p>

                    <ul className="space-y-4 mb-10">
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Quick Summaries
                          </p>
                          <p className="text-xs opacity-75">
                            Key points condensed for fast revision
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Bullet Points
                          </p>
                          <p className="text-xs opacity-75">
                            Important facts in easy-to-scan format
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Time Efficient
                          </p>
                          <p className="text-xs opacity-75">
                            Learn complete topics in 10-15 minutes
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Memory Aids
                          </p>
                          <p className="text-xs opacity-75">
                            Mnemonics and tricks for better retention
                          </p>
                        </div>
                      </li>
                    </ul>

                    <button
                      onClick={() => handleSelect("short")}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedType === "short"
                          ? "bg-secondary-foreground text-secondary hover:bg-opacity-90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                    >
                      View Short Notes
                    </button>
                  </div>
                </div>

                {/* Long Notes Card */}
                <div
                  className={`relative group rounded-2xl p-8 md:p-12 transition-all duration-300 transform hover:scale-105 text-left ${
                    selectedType === "long"
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
                      : "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/50 text-foreground"
                  }`}
                >
                  <div className="absolute top-6 right-6 text-4xl md:text-5xl opacity-20">
                    📚
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      Long Notes
                    </h2>
                    <p className="text-sm md:text-base mb-8 opacity-90">
                      Comprehensive coverage for complete understanding
                    </p>

                    <ul className="space-y-4 mb-10">
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Deep Explanations
                          </p>
                          <p className="text-xs opacity-75">
                            In-depth analysis of every concept
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Examples & Case Studies
                          </p>
                          <p className="text-xs opacity-75">
                            Real-world applications of concepts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Diagrams & Illustrations
                          </p>
                          <p className="text-xs opacity-75">
                            Visual representations for clarity
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-lg font-bold mt-1">✓</span>
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            Practice Questions
                          </p>
                          <p className="text-xs opacity-75">
                            Assessment and preparation for exams
                          </p>
                        </div>
                      </li>
                    </ul>

                    <button
                      onClick={() => handleSelect("long")}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        selectedType === "long"
                          ? "bg-primary-foreground text-primary hover:bg-opacity-90"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      View Long Notes
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  Your Selection
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  📚 <span className="font-semibold">Subject:</span>{" "}
                  {selectedSubject} |
                  <span className="font-semibold ml-3">Level:</span>{" "}
                  {selectedClass}
                </p>
                <p className="text-xs text-muted-foreground">
                  💡 Tip: You can access both short and long notes for any
                  subject. Start with short notes for quick review and dive into
                  long notes for deeper learning.
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
