import React from 'react';
<<<<<<< HEAD
import Logo from '../assets/logo.png'
import { MdEmail } from "react-icons/md";

const Header = () => {
  return <div className='bg-black-300' id='header'>
    <div className='container mx-auto'> 
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <a href='header'>
          <img src={Logo} alt='logo' />
        </a>
        {/* Gmail button */}
        <a href="mailto:manishjangra761@gmail.com" target="_blank" rel="noreferrer"><button className='btn btn-sm' > Mail Me <span className='text-2xl'><MdEmail/></span> </button></a>
      </div>
    </div>
    </div>

=======
import { Link } from 'react-scroll';
import { MdEmail } from "react-icons/md";
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-slate-900/75 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-white/10 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link
              to="home"
              smooth
              spy
              offset={-80}
              aria-label="Back to top"
              className="flex items-center gap-3 cursor-pointer"
            >
              <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
            </Link>

            <a
              href="mailto:manishjangra761@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm shadow-[0_8px_24px_rgba(0,208,255,0.25)]"
            >
              Mail Me
              <span className="text-2xl ml-2"><MdEmail /></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
>>>>>>> master
};

export default Header;
