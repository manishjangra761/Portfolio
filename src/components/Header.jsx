import React from 'react';
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

};

export default Header;
