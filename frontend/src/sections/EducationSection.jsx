import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      period: "2024 — 2027",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institute: "Oriental Institute of Science and Technology",
      location: "Bhopal, Madhya Pradesh",
      status: "Currently Pursuing",
      icon: GraduationCap,
    },
    {
      period: "2020 — 2023",
      degree: "Diploma",
      field: "Computer Science & Technology",
      institute: "Government Polytechnic Gopalganj",
      location: "Gopalganj, Bihar",
      status: "Completed",
      cgpa: "8.38 CGPA",
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#060816] py-24 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            <GraduationCap size={15} />
            Education
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Academic journey that built my foundation in Computer Science and
            Engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/70 via-violet-500/40 to-transparent sm:block" />

          <div className="space-y-10">
            {educationData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.period}
                  className="relative grid gap-6 sm:grid-cols-[40px_1fr]"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 hidden sm:block">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-[#0b1020] shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                    </div>
                  </div>

                  {/* Card */}
                  <article className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.045] sm:p-7">
                    {/* Top */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-blue-400/10 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-blue-300">
                          <Calendar size={13} />
                          {item.period}
                        </div>

                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {item.degree}
                        </h3>

                        <p className="mt-1 font-medium text-blue-400">
                          {item.field}
                        </p>
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Institute */}
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <h4 className="text-base font-semibold text-slate-200">
                        {item.institute}
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                        <span className="inline-flex items-center gap-2">
                          <MapPin size={15} />
                          {item.location}
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              item.status === "Completed"
                                ? "bg-emerald-400"
                                : "bg-blue-400"
                            }`}
                          />
                          {item.status}
                        </span>

                        {item.cgpa && (
                          <span className="inline-flex items-center gap-2 text-emerald-400">
                            <Award size={15} />
                            {item.cgpa}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;