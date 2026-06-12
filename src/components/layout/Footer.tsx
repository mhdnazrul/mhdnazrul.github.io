import { Github, Figma, Mail } from "lucide-react";
import { profile } from "@/lib/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-body)] border-t border-[var(--border-dark)] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left: Branding */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#a855f7] text-xl font-bold">✦</span>
              <span className="text-[var(--text-primary)] font-bold text-lg">NazrulIslam</span>
              <span className="text-[var(--text-muted)] text-sm ml-2">
                {profile.email}
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-sm">
              CSE student &amp; full-stack developer
            </p>
          </div>

          {/* Right: Media links */}
          <div>
            <p className="text-[var(--text-primary)] font-semibold mb-3">Media</p>
            <div className="flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[var(--text-muted)] hover:text-[#a855f7] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Figma"
                className="text-[var(--text-muted)] hover:text-[#a855f7] transition-colors"
              >
                <Figma size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-[var(--text-muted)] hover:text-[#a855f7] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--border-dark)] text-center">
          <p className="text-[var(--text-dimmer)] text-xs font-mono">
            © {new Date().getFullYear()} NazrulIslam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
