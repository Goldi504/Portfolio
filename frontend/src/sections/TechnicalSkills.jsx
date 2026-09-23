import React from "react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  GitBranch,
  Cloud,
  Layers3,
} from "lucide-react";

const TechnicalSkills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      icon: Monitor,
      accent: "blue",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
      ],
    },

    {
      title: "Backend Development",
      description: "Creating APIs and server-side application logic.",
      icon: Server,
      accent: "green",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
    },

    {
      title: "Database",
      description: "Working with application data and database systems.",
      icon: Database,
      accent: "purple",
      skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"],
    },

    {
      title: "AI & Integration",
      description: "Exploring AI-powered application development.",
      icon: BrainCircuit,
      accent: "pink",
      skills: ["Gemini API", "Groq", "AI Integration", "API Integration"],
    },

    {
      title: "Cloud & Services",
      description: "Using external services to support modern applications.",
      icon: Cloud,
      accent: "cyan",
      skills: ["Firebase", "Cloudinary", "ImageKit", "Vercel", "Render"],
    },

    {
      title: "Tools & Workflow",
      description: "Tools I use for development and project workflow.",
      icon: Wrench,
      accent: "orange",
      skills: ["Git", "GitHub", "Postman", "VS Code", "npm"],
    },
  ];

  const accentStyles = {
    blue: {
      border: "border-blue-400/15",
      bg: "bg-blue-400/[0.05]",
      text: "text-blue-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(59,130,246,0.08)]",
    },

    green: {
      border: "border-green-400/15",
      bg: "bg-green-400/[0.05]",
      text: "text-green-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(74,222,128,0.08)]",
    },

    purple: {
      border: "border-purple-400/15",
      bg: "bg-purple-400/[0.05]",
      text: "text-purple-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(192,132,252,0.08)]",
    },

    pink: {
      border: "border-pink-400/15",
      bg: "bg-pink-400/[0.05]",
      text: "text-pink-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(244,114,182,0.08)]",
    },

    cyan: {
      border: "border-cyan-400/15",
      bg: "bg-cyan-400/[0.05]",
      text: "text-cyan-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(34,211,238,0.08)]",
    },

    orange: {
      border: "border-orange-400/15",
      bg: "bg-orange-400/[0.05]",
      text: "text-orange-400",
      glow: "group-hover:shadow-[0_15px_50px_rgba(251,146,60,0.08)]",
    },
  };

  return (
    <section
      id="technical-skills"
      className="relative overflow-hidden bg-[#060816] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-150px] h-[350px] w-[350px] rounded-full bg-blue-600/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            <Code2 size={14} />
            Technical Skills
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Technologies, tools and platforms I use while developing modern
            full-stack web applications.
          </p>
        </div>

        {/* Skill cards */}

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const style = accentStyles[group.accent];

            return (
              <article
                key={group.title}
                className={`group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045] ${style.glow}`}
              >
                {/* Icon */}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.border} ${style.bg} ${style.text}`}
                >
                  <Icon size={21} />
                </div>

                {/* Heading */}

                <h2 className="mt-6 text-lg font-bold text-white">
                  {group.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {group.description}
                </p>

                {/* Skills */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[11px] font-medium text-slate-300 transition-colors duration-200 group-hover:border-white/[0.12]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Full Stack visual */}

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Layers3 className="text-violet-400" size={21} />

                <h2 className="text-lg font-bold text-white">
                  Full Stack Workflow
                </h2>
              </div>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                My development workflow connects frontend interfaces,
                backend APIs, databases and external services into complete
                applications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-lg border border-blue-400/20 bg-blue-400/[0.06] px-3 py-2 text-blue-400">
                React
              </span>

              <span className="text-slate-600">→</span>

              <span className="rounded-lg border border-green-400/20 bg-green-400/[0.06] px-3 py-2 text-green-400">
                Node.js
              </span>

              <span className="text-slate-600">→</span>

              <span className="rounded-lg border border-purple-400/20 bg-purple-400/[0.06] px-3 py-2 text-purple-400">
                MongoDB
              </span>

              <span className="text-slate-600">→</span>

              <span className="rounded-lg border border-pink-400/20 bg-pink-400/[0.06] px-3 py-2 text-pink-400">
                AI / APIs
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
          <GitBranch size={18} className="text-slate-600" />

          <p className="text-xs text-slate-500">
            My stack continues to evolve as I learn and build new projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;