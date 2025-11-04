import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ParallaxShowcase from './components/ParallaxShowcase.jsx';
import Projects from './components/Projects.jsx';
import { Mail, Twitter, Github, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ParallaxShowcase />
        <Projects />

        <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-black to-zinc-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Let’s build something remarkable</h2>
            <p className="mt-4 text-white/70">
              Collaborations, workshops, or product demos—if it blends AI, education, and thoughtful design, I’m in.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@ivanandrianto.dev"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors"
              >
                <Mail className="w-5 h-5" /> hello@ivanandrianto.dev
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20">
                <Twitter className="w-5 h-5" /> Twitter
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20">
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20">
                <Youtube className="w-5 h-5" /> YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Ivan Andrianto. All rights reserved.</p>
          <p className="text-white/50 text-xs">Crafted with React, Tailwind, Framer Motion, and a playful Spline scene.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
