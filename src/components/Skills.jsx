import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  {
    title: "Frontend",
    items: ["React + Hooks", "Tailwind & utility-first layouts", "Framer Motion micro-interactions", "Accessible design systems"],
  },
  {
    title: "Backend",
    items: ["Node.js + Express", "REST APIs with validation", "Auth with JWT and RBAC", "Caching & performance profiling"],
  },
  {
    title: "Data & Infra",
    items: ["MySQL + Sequelize", "MongoDB (Mongoose)", "Schema design & migrations", "Logging, monitoring, backups"],
  },
  {
    title: "Collaboration",
    items: ["Figma → code handoff", "GitHub flows & CI-friendly", "Docs and API contracts", "Stakeholder-friendly demos"],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          <motion.div
            variants={fadeIn("right", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-xl space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">Skills</p>
            <h2 className="h2">Practical skills that ship calm releases.</h2>
            <p className="text-slate-200 text-lg leading-8">
              The stack I lean on for polished, resilient products - balanced between developer speed and production-grade hardening.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-4 flex-1"
          >
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 shadow-[0_10px_30px_rgba(0,0,0,0.45)] p-5 space-y-3"
              >
                <p className="text-sm font-semibold text-slate-50">{group.title}</p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;