import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-slate-50 to-slate-100 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* CTA Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to ace your exams?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join thousands of students who are already using NotesHub to find comprehensive notes.
          </p>
          <Link
            to="/student-type"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Browsing Notes
          </Link>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 py-8 border-t border-border">
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center text-white text-xs font-bold">
                NR
              </div>
              NotesHub
            </h3>
            <p className="text-sm text-muted-foreground">
              Your comprehensive resource hub for academic notes. Making studying easier for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/student-type" className="hover:text-primary transition-colors">
                  Browse Notes
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@noteshub.com" className="hover:text-primary transition-colors">
                  hello@noteshub.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p>&copy; 2024 NotesHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
