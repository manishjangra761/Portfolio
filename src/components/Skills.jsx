import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const skills = [
  {
    title: "Frontend",
    items: [
      "React with Hooks & scalable component architecture",
      "Tailwind CSS for responsive, utility-first UI",
      "Framer Motion for smooth micro-interactions",
      "Accessible and performance-optimized interfaces",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js & Express for scalable REST APIs",
      "Robust API design with validation & error handling",
      "Authentication with JWT, RBAC & 2FA",
      "Performance optimization & caching strategies",
    ],
  },
  {
    title: "Data & Infra",
    items: [
      "MySQL (Sequelize) & relational data modeling",
      "MongoDB (Mongoose) for flexible schemas",
      "Database design, indexing & migrations",
      "Logging, monitoring & backup strategies",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Deployed full-stack applications with backend APIs and database integration",
      "Docker & containerized deployments",
      "Nginx configuration & server setup",
      "Production monitoring, logging & debugging",
    ],
  },
];

const Skills = () => {
  const railRef = useRef(null);

  const scrollRail = (direction) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="section" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10">
          <motion.div
            variants={fadeIn("right", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
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
            viewport={{ once: true, amount: 0.15 }}
            className="flex-1 space-y-3"
          >
            <div className="panorama-shell skills-shell">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="scroll-cue skills-rail-title">Skill groups</p>
                <div className="rail-controls">
                  <button type="button" className="rail-btn" onClick={() => scrollRail(-1)} aria-label="Scroll skills left">
                    <span className="rail-btn-icon">‹</span>
                  </button>
                  <button type="button" className="rail-btn" onClick={() => scrollRail(1)} aria-label="Scroll skills right">
                    <span className="rail-btn-icon">›</span>
                  </button>
                </div>
              </div>
              <div ref={railRef} className="panorama-track skills-track no-scrollbar">
              {skills.map((group) => (
                <div
                  key={`${group.title}-mobile`}
                  className="panorama-card skills-card rounded-2xl p-5 space-y-3"
                >
                  <p className="text-sm font-bold text-cyan-300">{group.title}</p>
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;