import React from "react";
import { Link } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "work" },
  { label: "Contact", to: "contact" },
];

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/85 backdrop-blur border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-4 text-slate-100">
          <Link
            to="home"
            smooth
            spy
            offset={-90}
            className="font-bold text-lg tracking-tight cursor-pointer hover:text-sky-300"
            aria-label="Go to hero"
          >
            Manish Jangra
          </Link>

          <div className="hidden md:flex items-center gap-2 rounded-full bg-[#0f172a]/80 border border-slate-800 px-2 shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                offset={-90}
                activeClass="nav-active"
                className="cursor-pointer px-3 py-2 text-sm text-slate-300 rounded-full border border-transparent transition-all hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/ManishResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary h-10 px-4 text-sm font-semibold text-slate-100"
            >
              Resume
            </a>
            <Link
              to="contact"
              smooth
              spy
              offset={-90}
              className="btn h-10 px-4 text-sm font-semibold"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
