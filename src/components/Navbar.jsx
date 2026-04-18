import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Globe } from "lucide-react";

import { navLinks } from "../constants";
import { useLanguage } from "../utils/i18n";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism-navbar py-3" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-16'>
        {/* Logo Cluster */}
        <div className='flex items-center gap-2'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 glassmorphism'>
              <span className='text-[16px] sm:text-[18px] font-bold text-white'>O</span>
            </div>
          </Link>
        </div>

        {/* Right Side: Language + Nav */}
        <div className='flex items-center gap-2 sm:gap-4'>
          {/* Global Language Switcher */}
          <div className='flex gap-1 items-center bg-white/5 border border-white/10 rounded-xl px-1 py-0.5 glassmorphism z-50 scale-90 sm:scale-100'>
            {['en', 'fr', 'ar'].map((lang) => (
               <button
                 key={lang}
                 onClick={() => setLanguage(lang)}
                 className={`text-[10px] sm:text-[14px] uppercase font-bold transition-all px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl ${
                   language === lang ? 'bg-[#915eff] text-white' : 'text-secondary hover:text-white'
                 }`}
               >
                 {lang}
               </button>
            ))}
          </div>

          {/* Desktop Nav Links / Mobile Burger */}
          <div className='flex items-center'>
            <ul className='list-none hidden sm:flex flex-row gap-5 lg:gap-8 items-center'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[17px] lg:text-[18px] font-medium cursor-pointer transition-colors duration-300 whitespace-nowrap`}
                  onClick={() => {
                    setActive(nav.title);
                    const element = document.getElementById(nav.id);
                    if (element) {
                       const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                       window.scrollTo({top: y, behavior: 'smooth'});
                    }
                  }}
                >
                  {t(`nav.${nav.id}`)}
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex items-center ml-2'>
              <div className='w-[28px] h-[28px] flex items-center justify-center cursor-pointer relative z-[110]'>
                {toggle ? (
                  <X className='text-white' onClick={() => setToggle(!toggle)} />
                ) : (
                  <Menu className='text-white' onClick={() => setToggle(!toggle)} />
                )}
              </div>

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 glassmorphism absolute top-14 ${isRtl ? 'left-4' : 'right-4'} min-w-[200px] z-[100] rounded-2xl border border-white/10 shadow-2xl shadow-black/50 animate-in fade-in zoom-in duration-300`}
              >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-semibold cursor-pointer text-[18px] w-full py-2 border-b border-white/5 last:border-0 ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      const element = document.getElementById(nav.id);
                      if (element) {
                         const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                         window.scrollTo({top: y, behavior: 'smooth'});
                      }
                    }}
                  >
                    {t(`nav.${nav.id}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
