import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 via-white to-white pt-12 md:pt-20 pb-16 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Find Perfect Notes for Your Exams
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop struggling to find study materials. Access comprehensive
                notes compiled by students like you. Whether you're in school or
                college, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/student-type"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                >
                  Browse Notes Now
                </Link>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    5K+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mt-2">
                    Active Users
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-accent">
                    500+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mt-2">
                    Subjects Covered
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-secondary">
                    10K+
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground mt-2">
                    Notes Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  step: "1",
                  title: "Select Your Type",
                  desc: "Tell us if you're a school or college student",
                  icon: "👤",
                },
                {
                  step: "2",
                  title: "Choose Your Class",
                  desc: "Select your current class or grade level",
                  icon: "📚",
                },
                {
                  step: "3",
                  title: "Pick a Subject",
                  desc: "Browse subjects available for your class",
                  icon: "📖",
                },
                {
                  step: "4",
                  title: "Get Notes",
                  desc: "Find short or comprehensive notes instantly",
                  icon: "✨",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose NotesHub?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Comprehensive Notes",
                  desc: "Access both short summaries and detailed long-form notes for every subject",
                },
                {
                  title: "Student Created",
                  desc: "Notes are created by students who have already aced their exams",
                },
                {
                  title: "Well Organized",
                  desc: "Find exactly what you need with our intuitive classification system",
                },
                {
                  title: "Always Updated",
                  desc: "Latest curriculum updates and exam patterns included in all notes",
                },
                {
                  title: "Mobile Friendly",
                  desc: "Study on the go with our responsive mobile-optimized platform",
                },
                {
                  title: "Search & Filter",
                  desc: "Powerful search to quickly find the notes you're looking for",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Types Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              For Every Student
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  School Students
                </h3>
                <p className="text-muted-foreground mb-6">
                  From 9th to 12th grade, find notes for CBSE, ICSE, and state
                  boards. Get complete subject coverage for all your
                  examinations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">✓</span> All major
                    subjects
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">✓</span> Board exam
                    focused
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">✓</span> Easy
                    language
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  College Students
                </h3>
                <p className="text-muted-foreground mb-6">
                  For graduation and post-graduation courses across all streams.
                  In-depth notes tailored to university curriculum.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-accent font-bold">✓</span> Advanced
                    topics
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-accent font-bold">✓</span> Detailed
                    explanations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-accent font-bold">✓</span>{" "}
                    Research-backed
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/student-type"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-b border-border">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Never Miss Important Notes Again
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Access thousands of verified notes created by top-performing
              students. Start your journey to better grades today.
            </p>
            <Link
              to="/student-type"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore Notes Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
