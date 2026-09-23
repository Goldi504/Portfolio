import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Send,
  User,
  FileText,
  MessageSquare,
  X,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove previous error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  // ==========================================
  // SUBMIT CONTACT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitError("");

    try {
      /*
       * Your backend route:
       *
       * POST /contact
       *
       * Body:
       * {
       *   name,
       *   email,
       *   subject,
       *   message
       * }
       */

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      // Backend returned an error
      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to send your message."
        );
      }

      // ==========================================
      // SUCCESS
      // ==========================================

      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      /*
       * After showing success message,
       * return to normal contact section.
       */
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
      }, 2000);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitError(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ==========================================
  // CLOSE FORM
  // ==========================================

  const closeForm = () => {
    if (submitting) return;

    setShowForm(false);
    setSubmitted(false);
    setSubmitError("");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-6 lg:px-8"
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute left-1/4 top-10 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* ==========================================
            HEADING
        ========================================== */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something

            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              together.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
            Have a project idea, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        {/* ==========================================
            CONTACT CARD
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <AnimatePresence mode="wait">

            {/* ========================================
                NORMAL CONTACT VIEW
            ======================================== */}

            {!showForm ? (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
              >

                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

                  {/* LEFT */}
                  <div>

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                        <Mail size={24} />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          Email
                        </p>

                        <a
                          href="mailto:goldikumari107@gmail.com"
                          className="mt-1 block text-base font-semibold text-white transition-colors hover:text-cyan-400 sm:text-lg"
                        >
                          goldikumari107@gmail.com
                        </a>

                      </div>
                    </div>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                      I'm open to discussing web development projects,
                      internships, collaborations, and opportunities where I
                      can contribute and continue learning.
                    </p>

                  </div>

                  {/* SEND MESSAGE BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(true);
                      setSubmitError("");
                    }}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200"
                  >
                    Send Message

                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                </div>

                {/* ======================================
                    SOCIAL LINKS
                ====================================== */}

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-7">

                  <span className="mr-2 text-xs uppercase tracking-[0.16em] text-slate-600">
                    Connect
                  </span>

                  {/* GITHUB */}

                  <a
                    href="https://github.com/Goldi504"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-400 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
                  >
                    <Github size={16} />

                    GitHub

                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  {/* LINKEDIN */}

                  <a
                    href="YOUR_LINKEDIN_URL"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-400 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
                  >
                    <Linkedin size={16} />

                    LinkedIn

                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                </div>
              </motion.div>

            ) : (

              /* ========================================
                  CONTACT FORM
              ======================================== */

              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >

                {/* FORM HEADER */}

                <div className="mb-8 flex items-start justify-between gap-4">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      Contact Me
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Send me a message
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Fill out the form and I'll get back to you.
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={submitting}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Close contact form"
                  >
                    <X size={18} />
                  </button>

                </div>

                {/* ======================================
                    SUCCESS MESSAGE
                ====================================== */}

                {submitted ? (

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[300px] flex-col items-center justify-center text-center"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400">
                      <CheckCircle2 size={30} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Message sent successfully
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Thank you for reaching out.
                    </p>

                  </motion.div>

                ) : (

                  /* ======================================
                      FORM
                  ====================================== */

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* NAME + EMAIL */}

                    <div className="grid gap-5 md:grid-cols-2">

                      {/* NAME */}

                      <div>

                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-medium text-slate-400"
                        >
                          Name
                        </label>

                        <div className="relative">

                          <User
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                          />

                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            disabled={submitting}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.035] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                          />

                        </div>
                      </div>

                      {/* EMAIL */}

                      <div>

                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-medium text-slate-400"
                        >
                          Email
                        </label>

                        <div className="relative">

                          <Mail
                            size={17}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                          />

                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            disabled={submitting}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.035] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                          />

                        </div>
                      </div>

                    </div>

                    {/* SUBJECT */}

                    <div>

                      <label
                        htmlFor="subject"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Subject
                      </label>

                      <div className="relative">

                        <FileText
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="What would you like to discuss?"
                          required
                          disabled={submitting}
                          className="w-full rounded-xl border border-white/10 bg-white/[0.035] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition-all focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                        />

                      </div>
                    </div>

                    {/* MESSAGE */}

                    <div>

                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium text-slate-400"
                      >
                        Message
                      </label>

                      <div className="relative">

                        <MessageSquare
                          size={17}
                          className="pointer-events-none absolute left-4 top-4 text-slate-600"
                        />

                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your message..."
                          required
                          disabled={submitting}
                          className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.035] py-3.5 pl-11 pr-4 text-sm leading-6 text-white outline-none placeholder:text-slate-600 transition-all focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-50"
                        />

                      </div>
                    </div>

                    {/* ERROR */}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-sm text-red-400"
                      >
                        {submitError}
                      </motion.div>
                    )}

                    {/* SUBMIT */}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-[11px] text-slate-600">
                        Your information will only be used to respond to
                        your message.
                      </p>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                      >

                        {submitting ? (
                          <>
                            <Loader2
                              size={16}
                              className="animate-spin"
                            />

                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Message

                            <Send
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </>
                        )}

                      </button>

                    </div>

                  </form>
                )}

              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;