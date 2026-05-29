"use client"

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingLines from '@/components/FloatingLines';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar berdiri sendiri di luar semua section */}
      <Navbar />

      {/* Hero section dengan FloatingLines */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={8}
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive
            parallax={true}
            animationSpeed={1}
            linesGradient={["#0d0015", "#1a0030", "#00C2FF"]}
          />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* Section lainnya */}
      <main className="flex-1 isolate">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}