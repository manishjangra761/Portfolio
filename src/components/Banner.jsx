import React from "react";
import Image from "../assets/photo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const stats = [
  { label: "Projects shipped", value: "7" },
  { label: "Experience", value: "2+ yrs" },
  { label: "Current", value: "Full Stack @ Delve Professionals" },
];

const capabilities = [
  "MERN stack with TypeScript-ready habits",
  "Secure auth, RBAC, and API contracts",
  "Dashboards with crisp, responsive layouts",
  "SQL + NoSQL schema design",
];

const Banner = () => {
  return (
    <section className="section pt-10 lg:pt-14" id="home">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
          <motion.div
            variants={fadeIn("up", 0.15)}
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-[#0f172a]/90 text-sm font-semibold text-slate-100 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Full Stack Developer - MERN
            </div>

            <div className="space-y-3">
              <h1 className="text-[40px] leading-[1.1] lg:text-[56px] font-bold text-slate-50 tracking-tight">
                Manish Jangra
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-lg text-slate-300">
                <span>Building</span>
                <span className="font-semibold text-slate-50">modern web products</span>
                <TypeAnimation
                  sequence={[
                    "with thoughtful UX", 1200,
                    "with robust backend systems", 1200,
                    "with secure authentication", 1200,
                    "with scalable architecture", 1200,
                    "with optimized performance", 1200,
                    "with production-ready code", 1200,
                  ]} speed={48}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-sky-600 font-semibold"
                />
              </div>
            </div>

            <p className="text-lg text-slate-200 max-w-2xl leading-8">
              I pair crisp interfaces with dependable backends. Currently building trading, real-estate, and hotel platforms at
              Delve Professionals LLC; previously shipped a multi-tenant education platform at Qvolv Technologies and delivered
              ONDC features across agriculture, retail, mobility, and insurance at SequelString AI.
            </p>

            <div className="flex flex-wrap gap-3">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 text-sm rounded-full border border-slate-700 bg-[#0f172a]/80 shadow-[0_6px_18px_rgba(0,0,0,0.5)] text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="/ManishResume.pdf" target="_blank" rel="noreferrer" className="btn h-12 px-6 text-base font-semibold">
                Download resume
              </a>
              <Link
                smooth
                spy
                to="work"
                offset={-90}
                className="btn btn-secondary h-12 px-5 text-base font-semibold"
              >
                View projects
              </Link>
              <Link
                smooth
                spy
                to="contact"
                offset={-90}
                className="text-slate-800 font-semibold hover:text-sky-600 transition-colors"
              >
                Book a call →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-[#0f172a]/80 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                >
                  <p className="text-2xl font-bold text-slate-50">{item.value}</p>
                  <p className="text-sm font-medium text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-xl text-slate-200">
              <a href="https://github.com/manishjangra761" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-sky-600">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/manishjangra2002" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-sky-600">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-sky-900/50 via-slate-900 to-slate-950 rounded-3xl blur-2xl" aria-hidden />
            <div className="relative rounded-3xl border border-slate-800 bg-[#0f172a]/90 shadow-[0_24px_70px_rgba(0,0,0,0.45)] overflow-hidden">
              <img src={Image} alt="Portrait" className="w-full h-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-slate-700 bg-[#0f172a]/90 p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Currently</span>
                  <span className="font-semibold text-white">Delve Professionals LLC</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Building scalable trading, real-estate, and hotel platforms with secure APIs and modern frontend systems.
                </p>              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
