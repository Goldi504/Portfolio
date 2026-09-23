import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Code2,
  Layers3,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const selectedProjects = [
  {
    title: "AI Career Predictor",
    category: "AI • MERN Stack",
    description:
      "An AI-powered career guidance platform that analyzes user skills, predicts suitable career paths, identifies skill gaps and generates personalized learning roadmaps.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
    ],
    github:
      "https://github.com/Goldi504/AI-Career_Predictor",
    icon: Sparkles,
  },

  {
    title: "AI Resume Builder",
    category: "AI • Full Stack",
    description:
      "An AI-powered resume builder designed to help users create structured and professional resumes through a modern web interface and intelligent resume-generation features.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI",
    ],
    github:
      "https://github.com/Goldi504/AI-Resume_Builder",
    icon: Code2,
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[15%] top-20 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[10%] h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[120px]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects I've built"
          description="A selection of projects where I turn ideas into practical web applications."
        />

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {selectedProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl"
              >
                {/* Top visual area */}
                <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/60 to-violet-500/[0.08] p-7 sm:p-8">
                  {/* Decorative circles */}
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyan-400/10" />

                  <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full border border-violet-400/10" />

                  <div className="relative flex items-start justify-between">
                    {/* Project icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.12]">
                      <Icon size={25} />
                    </div>

                    {/* GitHub icon */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source code`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-400"
                    >
                      <Github size={19} />
                    </a>
                  </div>

                  {/* Project type */}
                  <div className="relative mt-8">
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-400">
                      <Code2 size={12} />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>

                      <div className="mt-2 h-px w-12 bg-cyan-400/50 transition-all duration-300 group-hover:w-20" />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Source code button */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                    >
                      <Github size={15} />
                      Source Code
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors duration-300 hover:text-cyan-400"
                    >
                      View Repository
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* More projects message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-white/10 bg-white/[0.02] px-6 py-7 text-center"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500">
            <Layers3 size={19} />
          </div>

          <p className="mt-3 text-sm font-medium text-slate-300">
            More projects are being added
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Selected projects will appear here as I continue building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;