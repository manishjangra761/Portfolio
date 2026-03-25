import React from "react";
import Img1 from "../assets/popupPhoto1.png";
import Img2 from "../assets/popupPhoto2.png";
import Img3 from "../assets/popupPhoto3.png";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

const PopUps = ({ setShowPopup }) => {
 let datas = [
  {
    link: Img1,
    heading: "Ecommerce Website",
    detail: "HTML, CSS, JS ecommerce platform with authentication and local storage."
  },
  {
    link: Img2,
    heading: "Canvas Craft",
    detail: "Interactive drawing canvas with shapes, colors, eraser, and image export."
  },
  {
    link: Img3,
    heading: "Portfolio Website",
    detail: "React + Tailwind + Framer Motion personal portfolio."
  },
];


  return (
    <div className="absolute h-full w-full  flex justify-center items-center backdrop-blur-[3px]">
        <motion.div
    initial={{ x: -250, scale: 0 }} 
    animate={{ x: 0, scale: 1 }}  
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
     className="absolute m-auto flex justify-center h-auto bg-opacity-10 w-full"> 
      <div className="relative rounded-xl bg-gradient-to-r from-[#0f2a36] to-[#0c1f2c] text-slate-100 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
    {/* close button */}
     <button
        className="absolute top-1.5 right-1.5 cursor-pointer text-2xl"
        onClick={() => {
          setShowPopup(false);
        }}
      >
        <FaRegWindowClose />
      </button>
          <div className="relative">
            {/* map to dispalay projects */}
            {datas.map((data, i) => (
              <div key={i} className="border-b border-white/10 last:border-none rounded-xl px-2 my-4 mx-8 flex flex-row items-center">
                <div className=" basis-1/3 lg:basis-1">
                  <img
                    className="max-w-[106px] m-auto py-2"
                    src={data.link}
                    alt="project"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <h2 className="font-semibold text-2xl text-white">{data.heading}</h2>
                  <p className="text-sm text-slate-200">{data.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </motion.div>
    </div>
  );
};

export default PopUps;
