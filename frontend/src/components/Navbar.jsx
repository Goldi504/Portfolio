import { useState } from "react";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMobile}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950 transition-transform duration-300 group-hover:rotate-6">
            𝔾
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Goldi Kumari</p>

            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              MERN Developer
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Goldi504"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 p-2.5 text-slate-400 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white sm:flex"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="/resume.pdf"
            download="Goldi-Kumari-Resume.pdf"
            className="
    hidden
    md:inline-flex
    items-center
    gap-2
    rounded-xl
    bg-slate-950
    px-5
    py-2.5
    text-sm
    font-semibold
    text-white
    shadow-sm
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:bg-blue-600
    hover:shadow-lg
    hover:shadow-blue-600/20
  "
          >
            <span>Resume</span>

            <Download size={16} strokeWidth={2} />
          </a>

          {/* Mobile button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {/* <AnimatePresence> */}
{/* Mobile menu */}
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="
        mt-3
        rounded-2xl
        border border-white/10
        bg-slate-950
        p-2
        shadow-2xl
        md:hidden
      "
    >
      {/* ABOUT */}
      <a
        href="#about"
        onClick={closeMobile}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          text-left text-sm text-slate-300
          transition hover:bg-white/5 hover:text-white
        "
      >
        <span>About</span>
        <span className="text-xs text-slate-600">↗</span>
      </a>

      {/* SKILLS */}
      <a
        href="#skills"
        onClick={closeMobile}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          text-left text-sm text-slate-300
          transition hover:bg-white/5 hover:text-white
        "
      >
        <span>Skills</span>
        <span className="text-xs text-slate-600">↗</span>
      </a>

      {/* PROJECTS */}
      <a
        href="#projects"
        onClick={closeMobile}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          text-left text-sm text-slate-300
          transition hover:bg-white/5 hover:text-white
        "
      >
        <span>Projects</span>
        <span className="text-xs text-slate-600">↗</span>
      </a>

      {/* GITHUB */}
      <a
        href="#github"
        onClick={closeMobile}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          text-left text-sm text-slate-300
          transition hover:bg-white/5 hover:text-white
        "
      >
        <span>GitHub</span>
        <span className="text-xs text-slate-600">↗</span>
      </a>

      {/* CONTACT */}
      <a
        href="#contact"
        onClick={closeMobile}
        className="
          flex w-full items-center justify-between
          rounded-xl px-4 py-3
          text-left text-sm text-slate-300
          transition hover:bg-white/5 hover:text-white
        "
      >
        <span>Contact</span>
        <span className="text-xs text-slate-600">↗</span>
      </a>

      {/* RESUME */}
      <a
        href="/resume.pdf"
        download="Goldi-Kumari-Resume.pdf"
        onClick={closeMobile}
        className="
          mt-1
          flex w-full items-center justify-between
          rounded-xl
          border border-indigo-500/20
          bg-indigo-500/10
          px-4 py-3
          text-sm font-semibold
          text-white
          transition
          hover:bg-indigo-500/20
        "
      >
        <span>Resume</span>
        <Download size={16} />
      </a>
    </motion.div>
  )}
</AnimatePresence>
      {/* </AnimatePresence> */}
    </header>
  );
};

export default Navbar;
