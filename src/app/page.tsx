import Navbar from "@/components/layout/Navbar";
import SocialSidebar from "@/components/layout/SocialSidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-16">
      <div className="h-px bg-[var(--border-dark)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--bg-body)] min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Fixed social sidebar */}
      <SocialSidebar />

      {/* Hero */}
      <Hero />

      <Divider />

      {/* Projects */}
      <Projects />

      <Divider />

      {/* Skills */}
      <Skills />

      <Divider />

      {/* Blog */}
      <Blog />

      <Divider />

      {/* Contact */}
      <Contact />

      <Divider />

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />
    </main>
  );
}
