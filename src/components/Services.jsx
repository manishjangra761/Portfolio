import React, { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import PopUps from "./PopUps";

// const services = [
//   {
//     name: "FrontEnd",
//     description:
//       "I can create interactive web pages using languages like <span class='text-lg font-bold text-blue-500'>HTML</span>, <span class='text-lg font-bold text-blue-500'>CSS</span>,<span class='text-lg font-bold text-blue-500'>Tailwind CSS</span>, <span class='text-lg font-bold text-blue-500'>JavaScript</span>, <span class='text-lg font-bold text-blue-500'>ReactJS</span>,and <span class='text-lg font-bold text-blue-500'>Redux</span>.",
//       icon: RiReactjsFill,
//   },
//   {
//     name: "Backend",
//     description:
//       "I can write backend logic using JavaScript libraries such as <span class='text-lg font-bold text-green-500'>NodeJs</span> and <span class='text-lg font-bold text-green-500'>ExpressJS</span>.",
//     icon: FaNodeJs,
//   },
//   {
//     name: "DataBase",
//     description:
//       "I can interact with databases using languages like <span class='text-lg font-bold text-yellow-500'>SQL</span>, <span class='text-lg font-bold text-yellow-500'>MySQL</span>, <span class='text-lg font-bold text-yellow-500'>PostgreSQL</span>, and <span class='text-lg font-bold text-yellow-500'>MongoDB</span>.",
//     icon: SiMongodb,
//   },
// ];

const services = [
  {
    name: "Frontend Development",
    description:
      "Building responsive and interactive UIs using <span class='font-bold text-blue-500'>React.js</span>, <span class='font-bold text-blue-500'>Tailwind CSS</span>, <span class='font-bold text-blue-500'>JavaScript</span>, and reusable component architecture.",
    icon: RiReactjsFill,
  },
  {
    name: "Backend Development",
    description:
      "Developing scalable backend services with <span class='font-bold text-green-500'>Node.js</span>, <span class='font-bold text-green-500'>Express.js</span>, JWT authentication, RBAC, and REST APIs.",
    icon: FaNodeJs,
  },
  {
    name: "Database & APIs",
    description:
      "Designing optimized schemas using <span class='font-bold text-yellow-500'>MySQL</span>, <span class='font-bold text-yellow-500'>MongoDB</span>, <span class='font-bold text-yellow-500'>PostgreSQL</span>, and <span class='font-bold text-yellow-500'>Sequelize ORM</span> for secure and scalable applications.",
    icon: SiMongodb,
  },
];


const Services = () => {
  // state to see 
  let [showPopup, setShowPopup] = useState(false);

  return (
    <section
      className=" section "
      id="service"
      onClick={() => setShowPopup(false)}
    >
      <div className="container mx-auto  text-black ">
        <div className="flex flex-col items-center lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6 ">What I do</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I build full-stack applications with secure authentication, optimized APIs, and scalable databases.
            </h3>
            <Link to="https://github.com/manishjangra761">
              <button
                className="btn btn-sm "
                onClick={() => {
                  setShowPopup(true);
                }}
              >
                See my Work{" "}
              </button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, i) => {
              const { name, description } = service;
              return (
                <div
                  className="border-b border-black/20 h-[146px] mb-[38px] flex"
                  key={i}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p
                      className="font-secondary leading-tight"
                      dangerouslySetInnerHTML={{ __html: description }}
                    >
                      {/* {description} */}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <div className="text-3xl w-9 h-9 mb-[42px] flex justify-center items-center">
                      <service.icon />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      {showPopup && <PopUps setShowPopup={setShowPopup} />}
    </section>
  );
};

export default Services;
