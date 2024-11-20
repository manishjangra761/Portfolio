import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section lg:mt-16 h-[180vh] items-start lg:h-screen lg:items-center" id="about" ref={ref}>

      <div className="container mx-auto text-black">
        <div className='flex flex-col gap-y-1  lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Avatar Image */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false , amount:0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat bg-center min-h-[400px] lg:min-h-[580px]"></motion.div>
          <motion.div
           variants={fadeIn('left',0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false , amount:0.3}}
          
          className='flex-1'>
            {/* Content */}
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
              I'm a FullStack Web Developer with profiency in JS libraries like react, nodeJS.
            </h3>
            <p className='mb-6'>
            I hold a Master's in Computer Applications from MDU, Rohtak, where I developed expertise in front-end technologies through projects like Canvas Craft and an E-commerce Website. Additionally, I have worked on a To-Do App, Myntra Landin Page, and a Portfolio Website etc. These projects showcase my proficiency in creating dynamic and user-friendly web applications.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-4">
                {/* display count of projects and internship */}
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={5} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={5} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Months of <br />
                  Internship<br/> Experience
                </div>
              </div>
            </div>
            {/* Resume section */}
            <div className='flex gap-x-8 items-center'>
                <a href="https://drive.google.com/drive/folders/19AFL6qbHn4lLvetIXZOIeSqYchivxtqb" target="_blank" rel="noreferrer"><button className="btn btn-lg">View Resume</button></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
