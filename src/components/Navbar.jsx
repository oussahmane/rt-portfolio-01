import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navLinks } from "../constants";
import { useLanguage } from "../utils/i18n";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, isRtl } = useLanguage();
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='relative z-[100]' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-3 py-1.5 rounded-xl glassmorphism border border-white/10 hover:border-white/20 transition-all duration-300 group'
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm" />
        <span className='text-white text-[14px] font-medium hidden sm:inline'>{currentLang.label}</span>
        <ChevronDown className={`w-4 h-4 text-secondary group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute top-full mt-2 min-w-[150px] glassmorphism p-2 rounded-2xl border border-white/10 shadow-2xl ${isRtl ? 'right-0' : 'left-1/2 -translate-x-1/2'}`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  language === lang.code ? 'bg-[#915eff] text-white' : 'text-secondary hover:bg-white/5 hover:text-white'
                }`}
              >
                <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                <span className={`text-[14px] font-medium ${lang.code === 'ar' ? 'font-arabic' : ''}`}>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/admin")) return null;

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism-navbar py-3 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Left Side: Logo */}
        <div className='flex items-center flex-1'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className='w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-[#915eff] to-[#804dee] shadow-lg shadow-[#915eff]/20'>
              <span className='text-[18px] sm:text-[20px] font-extrabold text-white'>O</span>
            </div>
          </Link>
        </div>

        {/* Center Side: Language Dropdown */}
        <div className='flex-1 flex justify-center'>
          <LanguageDropdown />
        </div>

        {/* Right Side: Navigation */}
        <div className='flex items-center justify-end flex-1 gap-4'>
          <ul className='list-none hidden sm:flex flex-row gap-6 lg:gap-10 items-center'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] lg:text-[17px] font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap`}
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

          {/* Mobile Navigation */}
          <div className='sm:hidden flex items-center'>
            <div className='w-[28px] h-[28px] flex items-center justify-center cursor-pointer relative z-[110]'>
              {toggle ? (
                <X className='text-white' onClick={() => setToggle(!toggle)} />
              ) : (
                <Menu className='text-white' onClick={() => setToggle(!toggle)} />
              )}
            </div>

            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`p-6 glassmorphism absolute top-16 ${isRtl ? 'left-4' : 'right-4'} min-w-[210px] z-[100] rounded-3xl border border-white/10 shadow-2xl`}
                >
                  <ul className='list-none flex flex-col gap-4'>
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-semibold cursor-pointer text-[18px] w-full py-2 border-b border-white/5 last:border-0 ${
                          active === nav.title ? "text-white" : "text-secondary"
                        } hover:text-white transition-colors ${isRtl ? 'text-right' : 'text-left'}`}
                        onClick={() => {
                          setToggle(false);
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
