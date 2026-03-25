import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='text-slate-200 text-center border-t border-slate-800 bg-[#0f172a] m-auto max-w-6xl font-semibold text-sm py-4 mb-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.45)] px-4'>
      Built with React + Tailwind | Always curious, always shipping | (c) {year} Manish Jangra
    </footer>
  );
};

export default Footer;
