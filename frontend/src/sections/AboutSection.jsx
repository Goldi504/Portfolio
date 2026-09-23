import {
  UserRound,
  Code2,
  BrainCircuit,
  Database,
  GraduationCap,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070a18] py-24 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-120px] top-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[45%] h-[450px] w-[450px] rounded-full bg-violet-600/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1250px] px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-400">
              About Me
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                More than just{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  code.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                A Computer Science student and MERN Stack Developer focused on
                building practical, responsive and modern web applications.
              </p>
            </div>

            {/* <span className="hidden text-[11px] font-medium uppercase tracking-[0.25em] text-slate-600 md:block">
              01 / About
            </span> */}
          </div>
        </div>

        {/* ================= MAIN ================= */}

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =================================================
              LEFT — PERSONAL PROFILE
          ================================================= */}

          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0c1020] p-7 md:p-9">

            {/* Decorative gradient */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/[0.08] blur-[90px]" />

            {/* Top line */}

            <div className="relative flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <UserRound size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-400">
                    Who I am
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Goldi Kumari
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/[0.06] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-medium text-emerald-400">
                  Learning & Building
                </span>
              </div>

            </div>

            {/* Main heading */}

            <div className="relative mt-12">

              {/* <p className="mb-4 text-sm font-medium text-slate-500">
                Computer Science & Engineering
              </p> */}

              <h3 className="max-w-[560px] text-[42px] font-bold leading-[1.04] tracking-tight md:text-[56px]">

                Developer.

                <br />

                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Full Stack Builder.
                </span>

              </h3>

            </div>

            {/* Description */}

            <div className="relative mt-8 max-w-[600px] space-y-4 text-[15px] leading-7 text-slate-400">

              <p>
                I'm a Computer Science and Engineering student currently
                pursuing my B.Tech and building my skills as a MERN Stack
                Developer.
              </p>

              <p>
                My development journey started with frontend development in
                2024 and gradually expanded into React, backend development,
                REST APIs, databases and complete full-stack applications.
              </p>

              {/* <p>
                I enjoy turning ideas into useful digital products while
                continuously learning modern web technologies and AI.
              </p> */}

            </div>

            {/* ================= INFO CARDS ================= */}

            <div className="relative mt-9 grid gap-3 sm:grid-cols-2">

              {/* Education */}

              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.04]">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Education
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-white">
                      B.Tech — CSE
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Oriental Institute of Science & Technology
                    </p>

                    <p className="mt-1 text-[11px] text-blue-400">
                      2024 — 2027
                    </p>
                  </div>

                </div>

              </div>

              {/* Current Focus */}

              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/[0.04]">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Rocket size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Current Focus
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-white">
                      MERN Stack + AI
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Full-stack web development & AI applications
                    </p>

                    <p className="mt-1 text-[11px] text-violet-400">
                      2026 — Present
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* ================= BUTTONS ================= */}

            {/* <div className="relative mt-8 flex flex-wrap gap-3">

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
              >
                Let's work together

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a> */}

              {/* <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.05] hover:text-white"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div> */}

          </div>

          {/* =================================================
              RIGHT — WHAT I DO
          ================================================= */}

          <div>

            <div className="mb-5 flex items-center gap-4">

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                What I Do
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />

            </div>

            <div className="space-y-4">

              <SkillCard
                icon={<Code2 size={21} />}
                title="Full Stack Development"
                description="Building responsive web applications using React, Node.js, Express and MongoDB."
                color="blue"
              />

              <SkillCard
                icon={<Database size={21} />}
                title="Backend & APIs"
                description="Creating REST APIs, authentication systems and database-driven applications."
                color="blue"
              />

              <SkillCard
                icon={<BrainCircuit size={21} />}
                title="AI Exploration"
                description="Exploring Generative AI and integrating intelligent APIs into practical projects."
                color="violet"
              />

              {/* Approach */}

              <div className="rounded-[22px] border border-violet-500/10 bg-gradient-to-br from-violet-500/[0.08] to-blue-500/[0.03] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <h4 className="text-sm font-semibold text-white">
                    My approach
                  </h4>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Understand the problem → Design the solution → Build cleanly
                  → Test → Improve → Deploy
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM HIGHLIGHTS ================= */}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <JourneyCard
            icon={<Code2 size={18} />}
            title="MERN Stack"
            text="Full-stack development"
          />

          <JourneyCard
            icon={<Rocket size={18} />}
            title="2024"
            text="Started web development"
          />

          <JourneyCard
            icon={<BrainCircuit size={18} />}
            title="AI + Web"
            text="Current learning focus"
          />

        </div>

      </div>
    </section>
  );
};


/* ============================================================
   SKILL CARD
============================================================ */

const SkillCard = ({
  icon,
  title,
  description,
  color = "blue",
}) => {

  const isViolet = color === "violet";

  return (
    <div
      className={`group rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 ${
        isViolet
          ? "border-violet-500/20 bg-[#0c1020] hover:border-violet-500/40 hover:bg-violet-500/[0.035]"
          : "border-white/[0.08] bg-[#0c1020] hover:border-blue-500/30 hover:bg-blue-500/[0.025]"
      }`}
    >

      <div className="flex items-start gap-4">

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
            isViolet
              ? "border-violet-500/20 bg-violet-500/10 text-violet-400"
              : "border-blue-500/20 bg-blue-500/10 text-blue-400"
          }`}
        >
          {icon}
        </div>

        <div className="min-w-0 flex-1">

          <div className="flex items-center justify-between gap-3">

            <h4 className="text-base font-semibold text-white">
              {title}
            </h4>

            <CheckCircle2
              size={16}
              className={
                isViolet
                  ? "shrink-0 text-violet-400"
                  : "shrink-0 text-blue-500"
              }
            />

          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>

        </div>

      </div>

    </div>
  );
};


/* ============================================================
   JOURNEY CARD
============================================================ */

const JourneyCard = ({ icon, title, text }) => {

  return (
    <div className="group rounded-2xl border border-white/[0.08] bg-[#0c1020] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-blue-500/[0.025]">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          {icon}
        </div>

        <div>

          <p className="text-base font-bold text-white">
            {title}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
};


export default AboutSection;