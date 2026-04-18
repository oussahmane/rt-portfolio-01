// AI_DISABLED - To re-enable the AI Assistant window, comment back in the following code:
/*
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, User } from "lucide-react";

const Message = ({ text, sender }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className={`flex ${sender === "user" ? "justify-end" : "justify-start"} mb-4`}
  >
    <div className={`flex max-w-[80%] gap-3 ${sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
        sender === "user" ? "bg-accent" : "bg-tertiary"
      }`}>
        {sender === "user" ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={`p-4 rounded-3xl ${
        sender === "user" 
          ? "bg-accent text-white rounded-tr-none" 
          : "bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-tl-none"
      }`}>
        <p className='text-sm leading-relaxed'>{text}</p>
      </div>
    </div>
  </motion.div>
);

const AIChatWindow = ({ messages, onSendMessage, onClose, isLoading }) => {
  const [input, setInput] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className='fixed bottom-32 right-8 w-[90vw] sm:w-[400px] h-[550px] glassmorphism rounded-3xl overflow-hidden z-[100] flex flex-col shadow-2xl border border-white/10'
    >
      <div className='p-6 border-b border-white/10 flex justify-between items-center bg-white/5'>
        <div className='flex items-center gap-3'>
          <div className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
          <h3 className='text-white font-bold'>AI Portfolio Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          className='text-secondary hover:text-white transition-colors cursor-pointer p-1'
        >
          <X size={20} />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className='flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10'
      >
        <div className='space-y-4'>
          {messages.map((msg, i) => (
            <Message key={i} {...msg} />
          ))}
          {isLoading && (
            <div className='flex justify-start mb-4 animate-pulse'>
              <div className='bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/10'>
                <div className='flex gap-1'>
                  <div className='w-2 h-2 rounded-full bg-secondary animate-bounce' />
                  <div className='w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.2s]' />
                  <div className='w-2 h-2 rounded-full bg-secondary animate-bounce [animation-delay:0.4s]' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className='p-6 bg-white/5 border-t border-white/10'>
        <div className='relative flex items-center'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask me about my projects...'
            className='w-full bg-black-200/50 text-white text-sm rounded-full py-3 px-5 pr-12 outline-none border border-white/10 focus:border-accent/50 transition-all backdrop-blur-md'
          />
          <button
            type='submit'
            className={`absolute right-2 p-2 rounded-full transition-all ${
              input.trim() ? "bg-accent text-white shadow-lg shadow-accent/20" : "text-secondary cursor-not-allowed"
            }`}
            disabled={!input.trim() || isLoading}
          >
            <Send size={18} />
          </button>
        </div>
        <p className='text-[10px] text-secondary mt-3 text-center'>
          Powered by GPT-3.5-Turbo & Firebase
        </p>
      </form>
    </motion.div>
  );
};

export default AIChatWindow;
*/

// Minimal dummy export
const AIChatWindow = () => null;
export default AIChatWindow;
