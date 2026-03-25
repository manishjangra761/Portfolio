import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/project1.png";
import Img2 from "../assets/project2.png";
import Img3 from "../assets/project3.png";

const projects = [
  {
    title: "Learning Hub (multi-tenant LMS)",
    stack: "React / Node/Express / MySQL/Sequelize / RBAC",
    description: "Role-based dashboards, content workflows, and secure APIs powering an education platform.",
    impact: "Reduced handoff friction with documented contracts and observability hooks.",
    image: Img3,
    link: "https://github.com/manishjangra761",
  },
  {
    title: "ONDC retail and mobility flows",
    stack: "Node / Express / MongoDB / Tailwind",
    description: "Bidding, fare, order, and reconciliation features aligned to ONDC specs across agri, retail, mobility, and insurance.",
    impact: "Improved transaction clarity and reduced support escalations with defensive validation.",
    image: Img1,
    link: "https://github.com/manishjangra761",
  },
  {
    title: "Canvas Craft",
    stack: "HTML / CSS / JavaScript",
    description: "Lightweight drawing canvas with shapes, eraser, palettes, and export for quick ideation.",
    impact: "Zero-install sketching for collaborators and clients.",
    image: Img2,
    link: "https://github.com/manishjangra761",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">Projects</p>
            <h2 className="h2">Recent work that blends UX and engineering.</h2>
            <p className="text-lg text-slate-200 leading-8 max-w-xl">
              A few representative builds that show how I design contracts, model data, and keep interfaces crisp and
              predictable.
            </p>
            <a
              href="https://github.com/manishjangra761"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary h-11 px-5 text-sm font-semibold text-slate-100"
            >
              View GitHub
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a]/90 shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
              >
                <div className="overflow-hidden">
                  <img
                    className="w-full h-44 object-cover group-hover:scale-105 transition-all duration-500"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{project.stack}</p>
                  <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
                  <p className="text-sm text-slate-200">{project.description}</p>
                  <p className="text-sm text-slate-300">Impact: {project.impact}</p>
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-sky-300 hover:text-sky-200"
                    >
                      Explore →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
