import { Code2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import useFetch from "../hooks/useFetch";
import { getSkills } from "../services/portfolioService";

const SkillsSection = () => {
  const { data, loading } = useFetch(getSkills);

  const skills = Array.isArray(data)
    ? data
    : data?.skills || [];

  return (
    <section
      id="skills"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          eyebrow="Skills"
          title="Tools I use to turn ideas into products."
          description="A practical collection of technologies and tools I work with across frontend, backend and APIs."
        />

        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-40 animate-pulse rounded-3xl bg-slate-100"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill._id || skill.name || index}
                className="group rounded-3xl border border-slate-200 bg-[#f7f8fc] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Code2 size={20} />
                  </div>

                  {skill.level && (
                    <span className="text-xs font-semibold text-slate-400">
                      {skill.level}
                    </span>
                  )}
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900">
                  {skill.name}
                </h3>

                {skill.category && (
                  <p className="mt-1 text-sm text-slate-500">
                    {skill.category}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;