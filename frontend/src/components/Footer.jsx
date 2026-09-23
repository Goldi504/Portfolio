import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  QrCode,
  Copy,
  Check,
  X,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

const Footer = () => {
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  // Change this to your deployed portfolio URL
  // const portfolioUrl = "https://portfolio-c51u.vercel.app";
    const portfolioUrl = window.location.origin;


  const currentYear = new Date().getFullYear();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy portfolio link:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="relative overflow-hidden border-t border-white/[0.06] bg-slate-950 text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/[0.035] blur-[100px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/[0.035] blur-[110px]" />

        {/* Subtle Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          {/* =================================================
              MAIN FOOTER
          ================================================== */}
          <div className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:justify-between">
            {/* LEFT — BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-sm"
            >
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-slate-950 shadow-lg">
                  𝔾
                </div>

                {/* Brand */}
                <div>
                  <p className="text-sm font-semibold tracking-wide text-white">
                    Creating. Learning. Building.
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    MERN • AI • WEB
                  </p>
                </div>
              </div>

             
            </motion.div>

            {/* CENTER — NAVIGATION */}
          

            {/* RIGHT — SOCIAL + QR */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              {/* GitHub */}
              <a
                href="https://github.com/Goldi504"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
              >
                <Github
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
              >
                <Linkedin
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:goldikumari107@gmail.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
              >
                <Mail
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* QR */}
              <button
                type="button"
                onClick={() => setShowQR(true)}
                aria-label="Open portfolio QR code"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <QrCode
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </motion.div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}
          <div className="border-t border-white/[0.07]" />

          {/* =================================================
              BOTTOM FOOTER
          ================================================== */}
          <div className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="text-slate-600">
              © {currentYear} Goldi Kumari. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <span className="text-slate-600">
                Built with React & Tailwind CSS
              </span>

              {/* Back To Top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-400"
              >
                <ArrowUp
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          QR MODAL
      ====================================================== */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowQR(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-black/40"
            >
              {/* Close Icon */}
              <button
                type="button"
                onClick={() => setShowQR(false)}
                aria-label="Close QR modal"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.05] text-slate-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>

              {/* QR Icon */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <QrCode size={22} />
              </div>

              {/* Heading */}
              <h3 className="mt-5 text-center text-xl font-semibold text-white">
                Scan My Portfolio
              </h3>

              <p className="mt-2 text-center text-sm leading-6 text-slate-500">
                Scan the QR code to open my portfolio.
              </p>

              {/* QR CODE */}
              <div className="mx-auto mt-6 flex w-fit rounded-2xl bg-white p-3 shadow-lg">
                <QRCodeCanvas
                  value={portfolioUrl}
                  size={210}
                  bgColor="#ffffff"
                  fgColor="#020617"
                  level="H"
                  includeMargin={false}
                />
              </div>

              {/* Copy Link */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-3 text-sm font-medium text-cyan-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                {copied ? (
                  <>
                    <Check size={17} />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Copy
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    Copy Portfolio Link
                  </>
                )}
              </button>

              {/* Small URL */}
              <p className="mt-4 break-all text-center text-[10px] text-slate-600">
                {portfolioUrl}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;