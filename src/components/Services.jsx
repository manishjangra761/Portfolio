import React, { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PopUps from "./PopUps";

const services = [
  {
    name: "Frontend systems",
    icon: RiReactjsFill,
    bullets: [
      "Component libraries with React + Tailwind",
      "Design tokens and responsive layouts",
      "Animations with Framer Motion",
    ],
  },
  {
    name: "Backend & APIs",
    icon: FaNodeJs,
    bullets: [
      "REST APIs with Node.js + Express",
      "JWT auth, RBAC, and input validation",
      "Performance profiling and caching",
    ],
  },
  {
    name: "Data & Reliability",
    icon: SiMongodb,
    bullets: [
      "SQL & NoSQL schema design (MySQL, MongoDB, PostgreSQL)",
      "ORM with Sequelize, migrations, backups",
      "Observability, logging, and error handling",
    ],
  },
];

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="section" id="service" onClick={() => setShowPopup(false)}>
      <div className="container mx-auto text-slate-100">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f2a36]/80 border border-white/10 text-emerald-100 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]" />
              Services
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight text-white">
              Full-stack delivery with polish, performance, and security baked in.
            </h2>
            <p className="text-lg text-slate-200/90 max-w-xl">
              From kickoff to release, I own the UX, API contracts, database design, and deployment hygiene needed to launch reliable web products.
            </p>
            <div className="flex flex-wrap gap-3">
              {["MERN", "Microservices-ready", "CI-friendly", "User-first UX", "Observability"]
                .map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#0f2a36]/80 border border-white/10 text-sm font-medium text-emerald-100 shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="flex gap-4">
              <button className="btn btn-sm" onClick={() => setShowPopup(true)}>
                See featured work
              </button>
              <a
                href="https://github.com/manishjangra761"
                target="_blank"
                rel="noreferrer"
                className="h-[48px] px-6 text-sm font-primary font-semibold rounded-md border border-white/15 text-emerald-100 bg-transparent hover:bg-white hover:text-slate-900 transition-all inline-flex items-center justify-center"
              >
                GitHub profile
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.35)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 space-y-4"
          >
            {services.map((service) => (
              <div
                key={service.name}
                className="rounded-2xl bg-[#0f2a36]/80 border border-white/10 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex gap-4"
              >
                <div className="text-3xl text-emerald-300 mt-1">
                  <service.icon />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                  <ul className="list-disc list-inside text-slate-200 text-sm space-y-1">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {showPopup && <PopUps setShowPopup={setShowPopup} />}
    </section>
  );
};

export default Services;
