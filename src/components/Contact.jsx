import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
        status: "unread",
        processingStatus: "pending",
      });

      setLoading(false);
      alert(t('contact.success'));

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(t('contact.error'));
    }
  };

  const socialLinks = [
    { name: 'linkedin', icon: <Linkedin size={28} />, url: 'https://www.linkedin.com/in/oussahmane/' },
    { name: 'github', icon: <Github size={28} />, url: 'https://github.com/oussahmane' },
    { name: 'twitter', icon: <Twitter size={28} />, url: 'https://x.com/oussahmane' },
    { name: 'instagram', icon: <Instagram size={28} />, url: 'https://www.instagram.com/oussahmane/' },
    { name: 'facebook', icon: <Facebook size={28} />, url: 'https://www.facebook.com/oussahmane' },
    { name: 'whatsapp', icon: <MessageCircle size={28} />, url: 'https://whatsapp.com' },
    { name: 'telegram', icon: <Send size={28} />, url: 'https://telegram.com' },
    { name: 'gmail', icon: <Mail size={28} />, url: 'mailto:oussahmane@gmail.com' },
    { name: 'tiktok', icon: <FaTiktok size={28} />, url: 'https://www.tiktok.com/@oussahmane' },
  ];

  return (
    <div className='xl:mt-12 flex flex-col gap-10 overflow-hidden'>
      <div className='flex xl:flex-row flex-col-reverse gap-10'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] glassmorphism p-5 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group'
        >
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#915eff]/50 to-transparent" />
        
          <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest'>{t('contact.subtitle')}</p>
          <h3 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{t('contact.title')}</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3 sm:mb-4'>{t('contact.nameLabel')}</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                className='bg-white/5 py-3 sm:py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium focus:border-[#915eff] transition-colors'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3 sm:mb-4'>{t('contact.emailLabel')}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.emailPlaceholder')}
                className='bg-white/5 py-3 sm:py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium focus:border-[#915eff] transition-colors'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3 sm:mb-4'>{t('contact.messageLabel')}</span>
              <textarea
                rows={5}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                className='bg-white/5 py-3 sm:py-4 px-5 sm:px-6 placeholder:text-secondary text-white rounded-xl outline-none border border-white/10 font-medium focus:border-[#915eff] transition-colors resize-none'
                required
              />
            </label>

            <button
              type='submit'
              className='bg-[#915eff] py-3 sm:py-4 px-8 sm:px-10 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#804dee] transition-all transform hover:scale-105 active:scale-95'
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
          </form>

          {/* Social Icons Section */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-6 active:scale-95"
                  aria-label={link.name}
                >
                  {React.cloneElement(link.icon, { 
                    className: "w-8 h-8 sm:w-9 sm:h-9" 
                  })}
                </a>
              ))}
            </div>
            
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-secondary text-[12px] sm:text-[14px] font-medium tracking-wide">
                © {new Date().getFullYear()} Oussama. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Footer Section */}
      {/* The original social footer section was replaced by the new social icons section within the motion.div */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
