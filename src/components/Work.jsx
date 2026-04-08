import React, { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const projects = [
  {
    title: "Qvolv Multi-Tenant Platform",
    stack: "React / Node.js / Express / MySQL / Sequelize",
    description:
      "Contributed to a multi-tenant education management platform with secure JWT auth, RBAC, and workflow-driven modules for admins, educators, students, institutions, and industry users.",
    impact:
      "Improved dashboard usability, schema performance, and reliability through optimized Sequelize models, efficient queries, and production issue fixes.",
    link: "https://github.com/manishjangra761",
  },
  {
    title: "ONDC Domain Solutions Suite",
    stack: "Node.js / Express / React / SQL",
    description:
      "Built ONDC-aligned features across Agriculture, Intracity Mobility, Bids & Auctions, Life Insurance, and Retail, including booking, bidding, ordering, and policy purchase journeys.",
    impact:
      "Streamlined transaction accuracy and operations by supporting RSF reconciliation flows, return/delivery management, and end-to-end domain workflows.",
    link: "https://github.com/manishjangra761",
  },
  {
    title: "Audio Typing Website",
    stack: "React / Node.js / Express / SQL",
    description:
      "Built a real-time audio transcription platform where users listen to audio clips and type responses to improve typing speed and accuracy.",

    impact:
      "Helps stenography students and aspirants prepare for government exams by simulating real typing and listening practice scenarios.",
    link: "https://github.com/manishjangra761",
  },
  {
    title: "Portfolio Website",
    stack: "React / Tailwind CSS / Framer Motion",
    description:
      "Dynamic and responsive portfolio showcasing projects, skills, and personal profile with smooth animations and reusable components.",
    impact:
      "Improved user engagement with interactive UI, animations, and clear presentation of skills and experience.",
    link: "https://github.com/manishjangra761",
  },
  {
    title: "Ecommerce Website",
    stack: "HTML / CSS / JavaScript",
    description:
      "Built a visually appealing ecommerce platform with user authentication using Local Storage and dynamic login/signup flows.",
    impact:
      "Enabled secure client-side authentication and persistent user sessions without backend dependency.",
    link: "https://github.com/manishjangra761",
  },
  {
    title: "Canvas Craft",
    stack: "HTML / CSS / JavaScript",
    description:
      "Interactive drawing application with tools like shapes, eraser, and color palette for creative workflows.",
    impact:
      "Enhanced user creativity with exportable drawings in JPG format and flexible canvas controls.",
    link: "https://github.com/manishjangra761",
  },
];

const Work = () => {
  const railRef = useRef(null);
  const shorten = (text, max = 110) => (text.length > max ? `${text.slice(0, max).trim()}...` : text);

  const scrollRail = (direction) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <section className="section" id="work">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
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
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-3"
          >
            <div className="panorama-shell">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="scroll-cue">Projects rail</p>
                <div className="rail-controls">
                  <button type="button" className="rail-btn" onClick={() => scrollRail(-1)} aria-label="Scroll projects left">
                    <span className="rail-btn-icon">‹</span>
                  </button>
                  <button type="button" className="rail-btn" onClick={() => scrollRail(1)} aria-label="Scroll projects right">
                    <span className="rail-btn-icon">›</span>
                  </button>
                </div>
              </div>
              <div ref={railRef} className="panorama-track no-scrollbar">
              {projects.map((project) => (
                <div
                  key={`${project.title}-mobile`}
                  className="panorama-card group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a]/90 shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
                >
                  <div className="h-28 rounded-t-2xl border-b border-slate-700/70 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.35),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.34),transparent_42%),linear-gradient(135deg,#0b1220_20%,#13233f_55%,#1f1b3d_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-20px_30px_rgba(2,6,23,0.45)] flex items-end px-4 py-3">
                    <p className="text-sm font-semibold text-sky-200/90 tracking-wide">
                      {project.title}
                    </p>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{project.stack}</p>
                    <h3 className="text-base font-semibold text-slate-50">{project.title}</h3>
                    <p className="text-sm text-slate-200">{shorten(project.description)}</p>
                    <div className="pt-1">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
