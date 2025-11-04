import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 flex items-center">
        <div className="w-full md:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-cyan-400 font-medium tracking-wide"
          >
            Innovative Storytelling with AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Ivan Andrianto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 text-lg md:text-xl text-white/80"
          >
            AI content creator and educator • full‑stack developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-colors">
              Explore Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
