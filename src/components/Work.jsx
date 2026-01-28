import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/project1.png";
import Img2 from "../assets/project2.png";
import Img3 from "../assets/project3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">

        <div className='flex flex-col lg:flex-row gap-x-10  text-black'>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-14 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight text-accent text-5xl">
                My Latest <br /> work
              </h2>
              <p className="max-w-sm mb-4">
                Some of my recent projects include a React Portfolio, Ecommerce Website, and Canvas Craft drawing platform with real-world features and animations.
              </p>
              <a href="https://github.com/manishjangra761"><button className="btn btn-sm">View all Projects</button></a>
            </div>
            {/* Projects area */}
            {/* 1st project */}
            <div className="group relative overflow-hidden border-2 border-black/50 bg-white/20 backdrop-blur-lg shadow-xl rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="project"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                <span className='text-gradient'>HTML, CSS, JavaScript</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3xl text-white'> Ecommerce Website</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-8'>
            {/* 2nd project */}
            <div className="group relative overflow-hidden border-2 border-black/50 bg-white/20 backdrop-blur-lg shadow-xl rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="project"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                <span className='text-gradient'>Canvas, JS, UI Logic</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3xl text-white'> Canvas Craft</span>
              </div>
            </div>
            {/* 3rd project */}
            <div className="group relative overflow-hidden border-2 border-black/50 bg-white/20 backdrop-blur-lg shadow-xl rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="project"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                <span className='text-gradient'>React, Tailwind, Framer Motion</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3xl text-white'>Portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
