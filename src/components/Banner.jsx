import React from "react";
import Image from "../assets/photo.png";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

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
                  2000,
                  "Backend",
                  2000,
                  "FullStack",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
              <br/>Developer
            </motion.div>
            {/* Description */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I’m skilled in HTML, CSS, JavaScript, React.js, Node.js,
              Express.js and MongoDB along with Core Java. With hands-on
              experience from projects like a Canvas Craft website and an
              E-commerce Website etc. I’m eager to deepen my knowledge and
              contribute to innovative tech solutions.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
