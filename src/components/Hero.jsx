import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Subtle parallax for content while scrolling the hero
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yCta = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.2]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial glow that does not block interactions */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[70vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(34,211,238,0.18)_40%,transparent_70%)] blur-3xl" />
      </motion.div>

      {/* Gradient veil for contrast (keeps Spline interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 flex items-center">
        <div className="w-full md:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="text-cyan-300 font-medium tracking-wide"
          >
            Innovative Storytelling with AI
          </motion.p>

          <motion.h1
            style={{ y: yTitle }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
            className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Ivan Andrianto
          </motion.h1>

          <motion.p
            style={{ y: ySubtitle }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
            className="mt-4 text-lg md:text-xl text-white/85"
          >
            AI content creator and educator • full‑stack developer
          </motion.p>

          <motion.div
            style={{ y: yCta }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold shadow-[0_0_0_0_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_10px_rgba(34,211,238,0.15)] transition-[box-shadow,background-color] duration-300"
            >
              Explore Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Floating rings for subtle ambient motion */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.96, opacity: 0.6 }}
        animate={{ scale: 1.02, opacity: 0.9 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6, ease: 'easeInOut' }}
      >
        <div className="size-[52vh] rounded-full border border-white/10" />
      </motion.div>
    </section>
  );
}
