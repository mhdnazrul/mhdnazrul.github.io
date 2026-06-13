import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Blog from '@/sections/Blog';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import SocialSidebar from '@/components/layout/SocialSidebar';
export default function Home() {
    return (
        <main className="bg-[#282c33] min-h-screen">
            {/* Navigation */}
            <Navbar />
            {/* Fixed social sidebar */}
            <SocialSidebar />
            {/* Hero Section */}
            <Hero />

            {/* Projects Section */}
            <Projects />

            {/* Blog Section */}
            <Blog />

            {/* Skills Section */}
            <Skills />

            {/* About Section */}
            <About />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    );
}
