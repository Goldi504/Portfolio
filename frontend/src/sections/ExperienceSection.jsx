// import { motion } from "framer-motion";
// import {
//   BriefcaseBusiness,
//   CalendarDays,
//   GraduationCap,
//   MapPin,
//   ArrowUpRight,
// } from "lucide-react";

// import SectionHeading from "../components/SectionHeading";
// import { usePortfolio } from "../context/PortfolioContext";

// const ExperienceSection = () => {
//   const {
//     experiences = [],
//     education = [],
//   } = usePortfolio();

//   return (
//     <section
//       id="experience"
//       className="relative overflow-hidden bg-slate-950 px-6 py-28 lg:px-8"
//     >
//       {/* Background glow */}
//       <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-violet-500/[0.05] blur-[120px]" />

//       <div className="relative mx-auto max-w-6xl">
//         <SectionHeading
//           eyebrow="My Journey"
//           title="Experience & Education"
//           description="The journey behind the skills, projects and technologies I work with today."
//         />

//         <div className="grid gap-6 lg:grid-cols-2">

//           {/* ================= EXPERIENCE ================= */}

//           <div>
//             <div className="mb-7 flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
//                 <BriefcaseBusiness size={18} />
//               </div>

//               <div>
//                 <p className="text-sm font-semibold text-white">
//                   Experience
//                 </p>

//                 <p className="text-xs text-slate-500">
//                   Professional journey
//                 </p>
//               </div>
//             </div>

//             {experiences.length > 0 ? (
//               <div className="relative space-y-5">
//                 {/* Timeline line */}
//                 <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent sm:block" />

//                 {experiences.map((experience, index) => (
//                   <ExperienceCard
//                     key={experience._id || index}
//                     experience={experience}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <EmptyState message="Experience details will appear here." />
//             )}
//           </div>

//           {/* ================= EDUCATION ================= */}

//           <div>
//             <div className="mb-7 flex items-center gap-3">
//               <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-400">
//                 <GraduationCap size={19} />
//               </div>

//               <div>
//                 <p className="text-sm font-semibold text-white">
//                   Education
//                 </p>

//                 <p className="text-xs text-slate-500">
//                   Academic background
//                 </p>
//               </div>
//             </div>

//             {education.length > 0 ? (
//               <div className="relative space-y-5">
//                 {/* Timeline line */}
//                 <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-gradient-to-b from-violet-400/40 via-white/10 to-transparent sm:block" />

//                 {education.map((item, index) => (
//                   <EducationCard
//                     key={item._id || index}
//                     education={item}
//                     index={index}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <EmptyState message="Education details will appear here." />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// /* =========================================================
//    EXPERIENCE CARD
// ========================================================= */

// const ExperienceCard = ({ experience, index }) => {
//   const title =
//     experience.title ||
//     experience.role ||
//     experience.position ||
//     "Developer";

//   const company =
//     experience.company ||
//     experience.organization ||
//     experience.companyName ||
//     "";

//   const description =
//     experience.description ||
//     experience.details ||
//     "";

//   const location =
//     experience.location ||
//     experience.city ||
//     "";

//   const startDate =
//     experience.startDate ||
//     experience.from ||
//     "";

//   const endDate =
//     experience.endDate ||
//     experience.to ||
//     experience.current
//       ? "Present"
//       : "";

//   const technologies =
//     experience.technologies ||
//     experience.skills ||
//     [];

//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         x: -20,
//       }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.08,
//       }}
//       whileHover={{
//         y: -4,
//       }}
//       className="group relative sm:pl-14"
//     >
//       {/* Timeline dot */}
//       <div className="absolute left-[13px] top-7 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.35)] sm:block" />

//       <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]">
        
//         {/* Top */}
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-white">
//               {title}
//             </h3>

//             {company && (
//               <p className="mt-1 text-sm font-medium text-cyan-400">
//                 {company}
//               </p>
//             )}
//           </div>

//           {(startDate || endDate) && (
//             <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-slate-400">
//               <CalendarDays size={12} />

//               <span>
//                 {formatDate(startDate)}
//                 {startDate && (endDate || experience.current)
//                   ? " — "
//                   : ""}
//                 {experience.current
//                   ? "Present"
//                   : formatDate(endDate)}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Location */}
//         {location && (
//           <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
//             <MapPin size={13} />
//             {location}
//           </div>
//         )}

//         {/* Description */}
//         {description && (
//           <p className="mt-5 text-sm leading-7 text-slate-400">
//             {description}
//           </p>
//         )}

//         {/* Technologies */}
//         {technologies?.length > 0 && (
//           <div className="mt-5 flex flex-wrap gap-2">
//             {technologies.map((technology, techIndex) => {
//               const value =
//                 typeof technology === "string"
//                   ? technology
//                   : technology.name ||
//                     technology.title ||
//                     "";

//               if (!value) return null;

//               return (
//                 <span
//                   key={`${value}-${techIndex}`}
//                   className="rounded-lg bg-white/[0.045] px-2.5 py-1.5 text-[10px] text-slate-400"
//                 >
//                   {value}
//                 </span>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </motion.article>
//   );
// };


// /* =========================================================
//    EDUCATION CARD
// ========================================================= */

// const EducationCard = ({ education, index }) => {
//   const degree =
//     education.degree ||
//     education.course ||
//     education.title ||
//     education.program ||
//     "Education";

//   const institution =
//     education.institution ||
//     education.college ||
//     education.school ||
//     education.university ||
//     "";

//   const field =
//     education.field ||
//     education.department ||
//     education.specialization ||
//     "";

//   const description =
//     education.description ||
//     education.details ||
//     "";

//   const location =
//     education.location ||
//     education.city ||
//     "";

//   const startDate =
//     education.startDate ||
//     education.from ||
//     "";

//   const endDate =
//     education.endDate ||
//     education.to ||
//     education.graduationYear ||
//     "";

//   return (
//     <motion.article
//       initial={{
//         opacity: 0,
//         x: 20,
//       }}
//       whileInView={{
//         opacity: 1,
//         x: 0,
//       }}
//       viewport={{
//         once: true,
//         amount: 0.15,
//       }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.08,
//       }}
//       whileHover={{
//         y: -4,
//       }}
//       className="group relative sm:pl-14"
//     >
//       {/* Timeline dot */}
//       <div className="absolute left-[13px] top-7 hidden h-3 w-3 rounded-full border-2 border-violet-400 bg-slate-950 shadow-[0_0_18px_rgba(167,139,250,0.3)] sm:block" />

//       <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.05]">
        
//         {/* Top */}
//         <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-white">
//               {degree}
//             </h3>

//             {institution && (
//               <p className="mt-1 text-sm font-medium text-violet-400">
//                 {institution}
//               </p>
//             )}
//           </div>

//           {(startDate || endDate) && (
//             <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-slate-400">
//               <CalendarDays size={12} />

//               <span>
//                 {formatDate(startDate)}
//                 {startDate && endDate ? " — " : ""}
//                 {formatDate(endDate)}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Field */}
//         {field && (
//           <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
//             {field}
//           </p>
//         )}

//         {/* Location */}
//         {location && (
//           <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
//             <MapPin size={13} />
//             {location}
//           </div>
//         )}

//         {/* Description */}
//         {description && (
//           <p className="mt-5 text-sm leading-7 text-slate-400">
//             {description}
//           </p>
//         )}

//         {/* Arrow */}
//         <div className="mt-5 flex items-center justify-end">
//           <ArrowUpRight
//             size={16}
//             className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
//           />
//         </div>
//       </div>
//     </motion.article>
//   );
// };


// /* =========================================================
//    EMPTY STATE
// ========================================================= */

// const EmptyState = ({ message }) => {
//   return (
//     <div className="rounded-[1.6rem] border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
//       <p className="text-sm text-slate-500">
//         {message}
//       </p>
//     </div>
//   );
// };


// /* =========================================================
//    DATE FORMATTER
// ========================================================= */

// const formatDate = (date) => {
//   if (!date) return "";

//   if (
//     typeof date === "string" &&
//     /^[0-9]{4}$/.test(date)
//   ) {
//     return date;
//   }

//   const parsed = new Date(date);

//   if (Number.isNaN(parsed.getTime())) {
//     return date;
//   }

//   return parsed.toLocaleDateString("en-US", {
//     month: "short",
//     year: "numeric",
//   });
// };

// export default ExperienceSection;







import React from "react";
import {
  Code2,
  CalendarDays,
  Globe,
  Braces,
  Atom,
  Server,
  Database,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Cloud,
} from "lucide-react";

const Experience = () => {
  const journey = [
    {
      period: "Jan 2024 — Jun 2024",
      shortPeriod: "2024 · Jan — Jun",
      title: "Frontend Foundations",
      subtitle: "Started Web Development",
      description:
        "Started my web development journey by learning how websites are structured, styled and made responsive across different screen sizes.",
      icon: Globe,
      technologies: ["HTML", "CSS", "Responsive Design"],
      color: "blue",
    },

    {
      period: "Jul 2024 — Dec 2024",
      shortPeriod: "2024 · Jul — Dec",
      title: "JavaScript Development",
      subtitle: "Frontend Logic & APIs",
      description:
        "Moved from static interfaces to interactive web applications by learning JavaScript, DOM manipulation, asynchronous programming and API integration.",
      icon: Braces,
      technologies: ["JavaScript", "DOM", "REST APIs", "Git", "GitHub"],
      color: "yellow",
    },

    {
      period: "Jan 2025 — Jun 2025",
      shortPeriod: "2025 · Jan — Jun",
      title: "React Development",
      subtitle: "Modern Frontend Applications",
      description:
        "Started building component-based applications with React and learned state management, hooks, routing and modern frontend development workflows.",
      icon: Atom,
      technologies: ["React", "Vite", "Hooks", "React Router"],
      color: "cyan",
    },

    {
      period: "Jul 2025 — Dec 2025",
      shortPeriod: "2025 · Jul — Dec",
      title: "Backend Development",
      subtitle: "Server-Side Development",
      description:
        "Expanded from frontend into backend development by learning how to create APIs, handle requests, implement authentication and structure server-side applications.",
      icon: Server,
      technologies: ["Node.js", "Express.js", "REST API", "JWT"],
      color: "green",
    },

    {
      period: "Jan 2026 — Jun 2026",
      shortPeriod: "2026 · Jan — Jun",
      title: "MERN Stack Development",
      subtitle: "Full Stack Applications",
      description:
        "Connected frontend and backend development with databases and started building complete full-stack applications using the MERN stack.",
      icon: Database,
      technologies: [
        "MongoDB",
        "Mongoose",
        "React",
        "Node.js",
        "Express",
      ],
      color: "purple",
    },

    {
      period: "Jul 2026 — Present",
      shortPeriod: "2026 · Jul — Present",
      title: "Advanced Full Stack + AI",
      subtitle: "Current Development Focus",
      description:
        "Currently working on advanced full-stack projects, AI-powered features, third-party APIs, cloud services and deployment while improving production-ready development practices.",
      icon: Sparkles,
      technologies: [
        "AI APIs",
        "Gemini",
        "Groq",
        "Cloudinary",
        "Vercel",
        "Render",
      ],
      color: "pink",
      current: true,
    },
  ];

  const colors = {
    blue: {
      border: "border-blue-400/20",
      bg: "bg-blue-400/[0.06]",
      text: "text-blue-400",
      dot: "bg-blue-400",
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.25)]",
    },

    yellow: {
      border: "border-yellow-400/20",
      bg: "bg-yellow-400/[0.06]",
      text: "text-yellow-400",
      dot: "bg-yellow-400",
      glow: "shadow-[0_0_25px_rgba(250,204,21,0.2)]",
    },

    cyan: {
      border: "border-cyan-400/20",
      bg: "bg-cyan-400/[0.06]",
      text: "text-cyan-400",
      dot: "bg-cyan-400",
      glow: "shadow-[0_0_25px_rgba(34,211,238,0.22)]",
    },

    green: {
      border: "border-green-400/20",
      bg: "bg-green-400/[0.06]",
      text: "text-green-400",
      dot: "bg-green-400",
      glow: "shadow-[0_0_25px_rgba(74,222,128,0.2)]",
    },

    purple: {
      border: "border-purple-400/20",
      bg: "bg-purple-400/[0.06]",
      text: "text-purple-400",
      dot: "bg-purple-400",
      glow: "shadow-[0_0_25px_rgba(192,132,252,0.22)]",
    },

    pink: {
      border: "border-pink-400/20",
      bg: "bg-pink-400/[0.06]",
      text: "text-pink-400",
      dot: "bg-pink-400",
      glow: "shadow-[0_0_25px_rgba(244,114,182,0.22)]",
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#060816] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-180px] h-[420px] w-[420px] rounded-full bg-violet-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-400">
            <GitBranch size={14} />
            Development Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My Full Stack{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A timeline of how I progressed from frontend fundamentals to
            full-stack development and AI-powered applications.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Main timeline line */}

          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-400 via-violet-400 to-pink-400 opacity-30 sm:block" />

          <div className="space-y-10">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const color = colors[item.color];

              return (
                <div
                  key={item.period}
                  className="relative grid gap-6 sm:grid-cols-[40px_1fr]"
                >
                  {/* Timeline node */}

                  <div className="relative z-10 hidden sm:block">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border ${color.border} bg-[#060816] ${color.glow}`}
                    >
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${color.dot}`}
                      />
                    </div>
                  </div>

                  {/* Card */}

                  <article
                    className={`group relative overflow-hidden rounded-3xl border ${color.border} bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-7`}
                  >
                    {/* Hover glow */}

                    <div
                      className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full ${color.bg} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative">
                      {/* Top row */}

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          {/* Mobile icon */}

                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${color.border} ${color.bg} ${color.text}`}
                          >
                            <Icon size={21} />
                          </div>

                          <div>
                            {/* Date */}

                            <div
                              className={`inline-flex items-center gap-2 rounded-lg border ${color.border} ${color.bg} px-3 py-1.5 text-[11px] font-semibold ${color.text}`}
                            >
                              <CalendarDays size={13} />

                              {/* Desktop */}
                              <span className="hidden sm:inline">
                                {item.period}
                              </span>

                              {/* Mobile */}
                              <span className="sm:hidden">
                                {item.shortPeriod}
                              </span>
                            </div>

                            <h3 className="mt-4 text-xl font-bold tracking-tight text-white sm:text-2xl">
                              {item.title}
                            </h3>

                            <p className={`mt-1 text-sm font-medium ${color.text}`}>
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Current indicator */}

                        {item.current && (
                          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Currently Learning
                          </span>
                        )}
                      </div>

                      {/* Description */}

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>

                      {/* Skills */}

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition-colors group-hover:border-white/[0.12]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      {/* Progress indicator */}

                      <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-600">
                        <CheckCircle2 size={13} />

                        {item.current
                          ? "Current stage"
                          : "Completed milestone"}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-6 py-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-sm font-semibold text-white">
                Still building. Still learning.
              </p>

              <p className="mt-1 text-xs text-slate-500">
                My development journey continues with every project.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-violet-400">
              <Code2 size={15} />
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;