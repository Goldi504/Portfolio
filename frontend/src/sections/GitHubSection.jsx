// import React from "react";
import {
  Github,
  ExternalLink,
  Code2,
  Star,
  GitFork,
  ArrowUpRight,
} from "lucide-react";

const GitHubSection = () => {
  /*
   * ==========================================
   * SELECTED GITHUB PROJECTS
   * ==========================================
   *
   * Add/remove repositories here.
   * Only repositories listed here will appear.
   */

  const repositories = [
    {
      name: "AI-Career-Path-Predictor",
      description:
        "AI-powered career guidance platform that analyzes skills, identifies skill gaps and generates personalized career roadmaps.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AI",
      ],
      language: "JavaScript",
      stars: 0,
      forks: 0,
      sourceCode:
        "https://github.com/Goldi504/AI-Career-Path-Predictor",
      liveDemo: null,
      featured: true,
    },

    {
      name: "AI-E-Learning-Testing-Platform",
      description:
        "Adaptive learning and testing platform designed to generate assessments, analyze performance and create personalized study plans.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini",
      ],
      language: "JavaScript",
      stars: 0,
      forks: 0,
      sourceCode:
        "https://github.com/Goldi504/AI-E-Learning-Testing-Platform",
      liveDemo: null,
      featured: true,
    },

    {
      name: "Portfolio",
      description:
        "Modern personal portfolio showcasing my development journey, technical skills, selected projects and GitHub work.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
      ],
      language: "JavaScript",
      stars: 0,
      forks: 0,
      sourceCode:
        "https://github.com/Goldi504/Portfolio",
      liveDemo: null,
      featured: true,
    },

    {
      name: "Figma-to-Web",
      description:
        "Responsive web implementation created from a Figma design with attention to layout, spacing, typography and responsive behavior.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      language: "HTML",
      stars: 0,
      forks: 0,
      sourceCode:
        "https://github.com/Goldi504/Assigment2",
      liveDemo: null,
      featured: false,
    },
  ];

  const selectedRepositories = repositories.filter(
    (repo) => repo.featured
  );

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-[#060816] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-[5%] h-[420px] w-[420px] rounded-full bg-violet-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            <Github size={14} />
            Selected GitHub Work
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects I've{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A selection of projects that represent my experience with
            frontend development, backend systems, full-stack applications
            and AI-powered solutions.
          </p>

        </div>

        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {selectedRepositories.map((repo, index) => (
            <article
              key={repo.name}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-7"
            >

              {/* Hover glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.08] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">

                {/* =================================
                    TOP
                ================================= */}

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-blue-400">
                      <Github size={22} />
                    </div>

                    <div>

                      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600">
                        Repository {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-1 break-words text-lg font-bold text-white sm:text-xl">
                        {repo.name}
                      </h3>

                    </div>

                  </div>

                  <a
                    href={repo.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${repo.name} on GitHub`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-500 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
                  >
                    <ArrowUpRight size={17} />
                  </a>

                </div>

                {/* =================================
                    DESCRIPTION
                ================================= */}

                <p className="mt-6 min-h-[72px] text-sm leading-7 text-slate-400">
                  {repo.description}
                </p>

                {/* =================================
                    TECHNOLOGIES
                ================================= */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {repo.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* =================================
                    REPOSITORY INFO
                ================================= */}

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">

                  <div className="flex items-center gap-4 text-xs text-slate-500">

                    <span className="flex items-center gap-1.5">
                      <Code2 size={14} />
                      {repo.language}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Star size={14} />
                      {repo.stars}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <GitFork size={14} />
                      {repo.forks}
                    </span>

                  </div>

                  {/* Source code */}

                  <a
                    href={repo.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-400/[0.08] hover:text-blue-300"
                  >
                    <Github size={15} />
                    Source Code
                    <ExternalLink size={13} />
                  </a>

                </div>

                {/* =================================
                    LIVE DEMO
                ================================= */}

                {repo.liveDemo && (
                  <a
                    href={repo.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/[0.06] px-4 py-2.5 text-xs font-semibold text-blue-400 transition-all hover:bg-blue-400/[0.1]"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}

              </div>
            </article>
          ))}

        </div>

        {/* =========================================
            GITHUB PROFILE BUTTON
        ========================================= */}

        <div className="mt-12 text-center">

          <a
            href="https://github.com/Goldi504"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-white/[0.15] hover:bg-white/[0.06] hover:text-white"
          >
            <Github size={17} />
            View GitHub Profile
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default GitHubSection;