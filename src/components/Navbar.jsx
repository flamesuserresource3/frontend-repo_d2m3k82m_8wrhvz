import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Mail, User, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'backdrop-blur-md bg-black/40' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 text-white">
          <Rocket className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold tracking-tight">Ivan Andrianto</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/80 hover:bg-cyan-400 text-black font-medium transition-colors">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black/60 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-white/90 hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => handleNav('about')} className="flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/10">
            <User className="w-4 h-4" /> About
          </button>
          <button onClick={() => handleNav('projects')} className="flex items-center gap-2 px-3 py-2 rounded-md text-white/90 hover:bg-white/10">
            <BookOpen className="w-4 h-4" /> Projects
          </button>
        </div>
      )}
    </header>
  );
}
