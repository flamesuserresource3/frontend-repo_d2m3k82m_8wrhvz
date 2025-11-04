import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Code2, Bot } from 'lucide-react';

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 220]);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 style={{ y: ySlow }} className="text-3xl md:text-5xl font-bold text-white">
          Bridging AI, Education, and Code
        </motion.h2>
        <motion.p style={{ y: ySlow }} className="mt-4 max-w-2xl text-white/70">
          I craft interactive learning experiences and narrative-driven demos that make complex AI concepts feel intuitive. From short-form content to deep-dive workshops, I focus on clarity and impact.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div style={{ y: yFast }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">AI Content</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Explainers, tutorials, and experiments showcasing practical AI workflows with a focus on storytelling and real-world value.
            </p>
          </motion.div>

          <motion.div style={{ y: yMid }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">Education</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Workshops, courses, and mentorship designed to build confidence using modern AI tools responsibly and effectively.
            </p>
          </motion.div>

          <motion.div style={{ y: ySlow }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">Full‑Stack</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Production-grade demos, prototypes, and tools that bring ideas to life—from backend logic to delightful UIs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
