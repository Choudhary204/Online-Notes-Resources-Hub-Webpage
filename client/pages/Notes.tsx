import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Notes() {
  const [searchParams] = useSearchParams();
  const studentType = searchParams.get("type");
  const selectedClass = searchParams.get("class");
  const selectedSubject = searchParams.get("subject");
  const notesType = searchParams.get("notesType");

  // Sample notes data
  const sampleNotes = {
    short: [
      { id: 1, title: "Chapter Summary", excerpt: "Key concepts and definitions..." },
      { id: 2, title: "Quick Facts", excerpt: "Important points to remember..." },
      { id: 3, title: "Formulas & Rules", excerpt: "Essential formulas and rules..." },
    ],
    long: [
      { id: 1, title: "Complete Chapter Notes", excerpt: "Detailed explanation of all topics..." },
      { id: 2, title: "Advanced Concepts", excerpt: "Deep dive into complex topics..." },
      { id: 3, title: "Practice Problems", excerpt: "Solved examples and practice questions..." },
    ],
  };

  const notes = notesType === "short" ? sampleNotes.short : sampleNotes.long;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 via-white to-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Breadcrumb */}
            <div className="mb-12">
              <div className="text-sm text-muted-foreground mb-6">
                <span className="font-semibold text-foreground">{studentType}</span> •{" "}
                <span className="font-semibold text-foreground">{selectedClass}</span> •{" "}
                <span className="font-semibold text-foreground">{selectedSubject}</span> •{" "}
                <span className="text-primary font-semibold">{notesType} notes</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {selectedSubject}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {notesType === "short"
                  ? "Quick revision notes with key points and summaries"
                  : "Comprehensive notes with detailed explanations and examples"}
              </p>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <input
                type="text"
                placeholder="Search notes..."
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select className="px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Sort by relevance</option>
                <option>Most recent</option>
                <option>Most popular</option>
              </select>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group"
                >
                  <div className="mb-4 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <span className="text-3xl">📖</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{note.excerpt}</p>
                  <button className="text-primary font-semibold text-sm hover:gap-2 transition-all flex items-center gap-1">
                    View Notes <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-3">📚 About These Notes</h3>
              <p className="text-muted-foreground text-sm mb-4">
                These {notesType} notes for {selectedSubject} have been compiled by top-performing students and verified by educators. They cover the entire syllabus as per your {selectedClass} curriculum.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> Verified and accurate
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> Updated regularly
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> Exam-focused content
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
