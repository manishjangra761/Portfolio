<<<<<<< HEAD
import React from 'react'

const Footer = () => {
  return (
    <footer className=' text-black text-center border-t-2 border-black m-auto w-[80vw] font-semibold text-base overflow-hidden outline-none mb-4'>Copyright © and ® Since 2024| Created By Manish Jangra</footer>
  )
}

export default Footer
=======
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='text-slate-200 text-center border-t border-slate-800 bg-[#0f172a] m-auto max-w-6xl font-semibold text-sm py-4 mb-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.45)] px-4'>
      Always curious, always shipping | (c) {year} Manish Jangra
    </footer>
  );
};

export default Footer;
>>>>>>> master
