import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboard, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto ">
        <div className="w-full bg-white h-[40px] backdrop-blur-2*l rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-black">
          <Link
            to="home"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[30px] h-[30px] py-1.5"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-5}
            className="cursor-pointer w-[30px] h-[30px]  py-1.5"
          >
            <BiUser />
          </Link>
          <Link
            to="service"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] py-1.5"
          >
            <BsClipboard />
          </Link>
          <Link
            to="work"
           activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] py-1.5"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass='active'
            smooth={true}
            spy={true}
            className="cursor-pointer w-[30px] h-[30px] py-1.5"
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
