import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const roles = [
  {
    company: "Qvolv Technologies - Noida",
    title: "Full Stack Developer",
    period: "Jul 2025 - Present",
    highlights: [
      "Multi-tenant education platform with role-based dashboards",
      "Express APIs with JWT/RBAC and Sequelize on MySQL",
      "Analytics views and content workflows tuned for reliability",
    ],
  },
  {
    company: "SequelString AI - New Delhi",
    title: "Full Stack Developer Intern",
    period: "Dec 2024 - Jun 2025",
    highlights: [
      "ONDC features across agri, retail, mobility, and insurance",
      "Built bidding, fare, and order flows with defensive validation",
      "Improved dashboard UX for operators and customers",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:items-start">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">Experience</p>
            <h2 className="h2">Building dependable products end-to-end.</h2>
            <p className="text-slate-200 text-lg leading-8">
              I bridge product thinking with careful engineering: clear contracts, clean data models,
              accessible UI, and calm reliability in production.
            </p>
            <div className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <p className="text-sm text-slate-300">Primary toolkit</p>
              <p className="font-semibold text-slate-50">React - Tailwind - Node - Express - MySQL - MongoDB</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="lg:col-span-2 space-y-4"
          >
            {roles.map((role) => (
              <div
                key={role.company}
                className="rounded-2xl border border-slate-800 bg-[#0f172a]/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{role.period}</p>
                    <p className="text-lg font-semibold text-slate-50">{role.title}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-300">{role.company}</p>
                </div>
                <ul className="mt-3 space-y-2 text-slate-200">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" aria-hidden />
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

export default Experience;