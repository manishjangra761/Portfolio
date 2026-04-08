import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const principles = [
  "Lead with clarity: tidy contracts, tidy UI",
  "Design for calm: error states, loading states, and empty states",
  "Ship with care: tests, logging, and observability",
  "Collaborate openly: transparent roadmaps and demos",
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
          <motion.div
            variants={fadeIn("right", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-5"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold">About</p>
            <h2 className="h2">Full-stack developer focused on clarity and resilience.</h2>
            <p className="text-lg text-slate-200 leading-8">
              I enjoy pairing crisp interfaces with dependable backends. I design schemas, write APIs, craft dashboards,
              and document decisions so teams can move with confidence.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {principles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 shadow-[0_10px_30px_rgba(0,0,0,0.45)] p-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            <div className="rounded-3xl border border-slate-800 bg-[#0f172a]/90 p-6 shadow-[0_18px_46px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Core strengths</p>
                  <p className="text-lg font-semibold text-slate-50">Product-minded engineering</p>
                </div>
                <a
                  href="/ManishResume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 font-semibold text-sm hover:text-sky-200"
                >
                  View resume →
                </a>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-slate-800 bg-[#111a2d] p-4">
                  <p className="font-semibold text-slate-50">Systems & data</p>
                  <p className="text-slate-300">API design, RBAC, schema design, migrations.</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-[#111a2d] p-4">
                  <p className="font-semibold text-slate-50">Experience design</p>
                  <p className="text-slate-300">Reusable components, responsive layouts, micro-interactions.</p>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Education</p>
                  <p className="font-semibold text-slate-50">MCA - MDU, Rohtak (2022-2024)</p>
                  <p className="text-sm text-slate-300">Courses: OS, DSA, AI, ML, Networking, Databases</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-[#0f172a]/90 p-4">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Training</p>
                  <p className="font-semibold text-slate-50">QSpiders - Full Stack Development</p>
                  <p className="text-sm text-slate-300">Jun 2024 - Nov 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
