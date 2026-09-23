import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

import Button from "../components/Button";

import profileImage from "../assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute right-[-8rem] top-1/3 h-[25rem] w-[25rem] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Available badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities
            </div>

             <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-indigo-300
                  sm:text-sm
                "
              >
                <span className="h-px w-7 bg-indigo-400/60" />
                Hello, I'm
              </motion.p>

            <h1
                className="
                  text-5xl
                  font-black
                  leading-[0.94]
                  tracking-[-0.045em]
                  sm:text-6xl
                  lg:text-[64px]
                  xl:text-[72px]
                "
              >
                Goldi
                <span className="block">
                  Kumari
                  <span className="gradient-text">.</span>
                </span>
              </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Computer Science student and MERN Stack Developer focused on
              building modern, responsive and scalable web applications with
              clean user experiences.
            </p>
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-white/[0.035]
                        px-2.5
                        py-1
                        text-[11px]
                        font-medium
                        text-slate-400
                        transition
                        hover:border-indigo-400/30
                        hover:bg-indigo-500/10
                        hover:text-indigo-300
                      "
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">Explore My Work</Button>

              <Button href="#contact" variant="secondary">
                Let's Connect
              </Button>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/Goldi504"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT PROFILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Outer glow */}
            <div className="absolute inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

            {/* Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
             className="
  relative
  mx-auto
  w-[78%]
  max-w-[340px]
  rounded-[2rem]
  border border-white/10
  bg-white/[0.04]
  p-3
  shadow-2xl
  shadow-black/40
  backdrop-blur-xl
"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-slate-900">
                <img
                  src={profileImage}
                  alt="Goldi Kumari"
                  className="aspect-[4/5] w-full object-cover"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Profile label */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                 

                  <p className="mt-1 text-xs text-slate-400">
                    MERN Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-16 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-xs text-slate-500">Stack</p>

              <p className="mt-1 text-sm font-semibold text-white">MERN + AI</p>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-4 bottom-20 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-xs text-slate-500">Focus</p>

              <p className="mt-1 text-sm font-semibold text-white">
                Web Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>

        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
