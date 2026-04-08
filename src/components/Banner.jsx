import React from "react";
import Image from "../assets/photo.png";
<<<<<<< HEAD
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
=======
import { FaGithub, FaLinkedin } from "react-icons/fa";
>>>>>>> master
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

<<<<<<< HEAD
const Banner = () => {
  return (
    <section
      className="min-h-[74vh] lg:min-h-[74vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center text-black lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Manish
            </motion.h1>
            {/* typing Animation */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 w-full">I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend",
                  600,
                  "Backend",
                  600,
                  "FullStack",
                  600,
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              <br />Developer
            </motion.div>
            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Full Stack Developer with experience building scalable MERN stack applications.
              I work with React.js, Node.js, Express.js, MySQL, MongoDB, Sequelize ORM and REST APIs.
              Currently contributing to a multi-tenant education platform at Qvolv Technologies and previously delivered production systems across multiple ONDC domains at SequelString AI.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-4 mx-auto lg:mx-0"
            >
              <Link smooth={true} spy={true} to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>

            </motion.div>
            {/* social media icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/manishjangra761" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/manishjangra2002" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/+919817558402" target="_blank" rel="noreferrer">
                <FaWhatsappSquare />
              </a>
            </motion.div>
          </div>
          {/* Manish Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="My_Image" />
=======
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
>>>>>>> master
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
