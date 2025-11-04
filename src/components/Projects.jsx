import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Story Weavers',
    description: 'Interactive narrative engine blending LLMs with motion for live storytelling.',
    tags: ['Next.js', 'FastAPI', 'LLMs'],
    links: [
      { label: 'Demo', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' },
    ],
  },
  {
    title: 'Teach with AI',
    description: 'Course templates and tooling for building AI-first workshops.',
    tags: ['Vite', 'OpenAI', 'Notion'],
    links: [
      { label: 'Overview', icon: ExternalLink, href: '#' },
      { label: 'YouTube', icon: Youtube, href: '#' },
    ],
  },
  {
    title: 'Realtime Agents',
    description: 'Socket-based orchestration for multi-agent collaboration.',
    tags: ['WebSockets', 'Python', 'Redis'],
    links: [
      { label: 'Demo', icon: ExternalLink, href: '#' },
      { label: 'Code', icon: Github, href: '#' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-gradient-to-b from-zinc-950 to-black">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-2xl" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A mix of prototypes, learning tools, and production pieces exploring what’s possible with today’s AI.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">Get in touch</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
              </div>

              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                    <l.icon className="w-4 h-4" /> {l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
