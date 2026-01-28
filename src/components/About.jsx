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
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat bg-center min-h-[400px] lg:min-h-[580px]"></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}

            className='flex-1'>
            {/* Content */}
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
              I'm a Full Stack Developer specializing in MERN Stack Applications.
            </h3>
            <p className='mb-6'>
              I hold a Master's in Computer Applications (MCA) from MDU, Rohtak. Currently, I work at Qvolv Technologies as a Full Stack Developer, contributing to a multi-tenant educational management platform for schools and universities.
              <br /><br />
              I design scalable backend services using Node.js, Express, JWT authentication, and Sequelize ORM with MySQL, and build responsive dashboards using React.js and Tailwind CSS. Previously, at SequelString AI, I worked across ONDC domains like Agriculture, Retail, Mobility, Bids & Auctions, and Life Insurance, delivering real-world production features.
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
                  {inView ? <CountUp
                    start={0}
                    end={1.5}
                    duration={5}
                    decimals={1}
                  /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Years of <br />
                  Experience
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
