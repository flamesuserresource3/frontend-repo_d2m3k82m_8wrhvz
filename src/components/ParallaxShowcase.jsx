import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Code2, Bot } from 'lucide-react';

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: 'easeOut' } }),
  };

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-black to-zinc-950 overflow-hidden">
      {/* Ambient gradient aura */}
      <motion.div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-cyan-500/10 blur-3xl" style={{ opacity: glowOpacity }} />

      {/* Animated connective line */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-28 h-[1px] w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        style={{ rotate }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 style={{ y: ySlow }} className="text-3xl md:text-5xl font-bold text-white">
          Bridging AI, Education, and Code
        </motion.h2>
        <motion.p style={{ y: ySlow }} className="mt-4 max-w-2xl text-white/70">
          Practical, hands-on work that makes complex AI concepts intuitive—and immediately useful.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            style={{ y: yFast }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform will-change-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">AI Content</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Explainers, tutorials, and experiments with clear takeaways and reusable templates.
            </p>
            <div className="mt-4 text-xs text-white/60">
              Output: scripts, snippets, ready-to-run demos.
            </div>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            style={{ y: yMid }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform will-change-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">Education</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              Workshops and courses that focus on real projects, not theory for theory’s sake.
            </p>
            <div className="mt-4 text-xs text-white/60">
              Format: live sessions, templates, guided challenges.
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            style={{ y: ySlow }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform will-change-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h3 className="text-white font-semibold">Full‑Stack</h3>
            </div>
            <p className="mt-3 text-white/70 text-sm">
              From backend orchestration to polished UIs, shipped as useful tools and demos.
            </p>
            <div className="mt-4 text-xs text-white/60">
              Stack: Python, FastAPI, React, agents, realtime.
            </div>
          </motion.div>
        </div>

        {/* Quick value bullets with subtle fade-up */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Actionable templates", "Clear mental models", "Production-minded demos"].map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              • {b}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
