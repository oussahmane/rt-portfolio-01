import React, { useEffect } from 'react';
import { 
  X, 
  Mail, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  User, 
  Calendar,
  Undo2,
  MessageCircle,
  Copy,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MessageDetail = ({ 
  message, 
  isOpen, 
  onClose, 
  onToggleRead, 
  onToggleResolve, 
  onDelete 
}) => {
  // Handle escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !message) return null;

  const isRead = message.status === 'read';
  const isResolved = message.processingStatus === 'resolved';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(message.email);
    alert("Email copied to clipboard!");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex justify-end overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full lg:max-w-2xl h-full bg-[#0f172a] border-l border-[#1e293b] shadow-2xl flex flex-col z-[1001]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#1e293b] flex items-center justify-between bg-[#0f172a] sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={onClose}
                className="p-2 rounded-xl bg-[#1e293b] text-slate-400 hover:text-white transition-all border border-[#334155]"
              >
                <ChevronLeft size={20} />
              </button>
              <div>
                <p className="text-[#64748b] text-[10px] font-bold uppercase tracking-widest mb-0.5">Message Inspector</p>
                <h2 className="text-white font-bold text-xl">Inquiry Context</h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleRead(message.id, message.status)}
                className={`p-2.5 rounded-xl border transition-all ${
                    !isRead ? 'bg-[#915eff]/10 border-[#915eff]/30 text-[#915eff]' : 'bg-[#1e293b] border-[#334155] text-slate-400 hover:text-white'
                }`}
                title={isRead ? "Mark as unread" : "Mark as read"}
              >
                {isRead ? <Undo2 size={18} /> : <Mail size={18} />}
              </button>
              <button
                onClick={() => onToggleResolve(message.id, message.processingStatus)}
                className={`p-2.5 rounded-xl border transition-all ${
                  isResolved ? 'bg-green-500/10 border-green-500/30 text-green-500' : 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                }`}
                title={isResolved ? "Mark as pending" : "Mark as resolved"}
              >
                {isResolved ? <Clock size={18} /> : <CheckCircle2 size={18} />}
              </button>
              <div className="w-[1px] h-6 bg-[#1e293b] mx-2" />
              <button
                onClick={() => {
                   if(window.confirm("Delete this message permanentely?")) {
                      onDelete(message.id);
                      onClose();
                   }
                }}
                className="p-2.5 rounded-xl bg-red-500/10 text-red-400 hover:text-red-500 hover:bg-red-500/20 transition-all border border-red-500/20"
                title="Delete Message"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10 selection:bg-[#915eff]/30">
            {/* Sender Section */}
            <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#915eff]/5 rounded-full blur-3xl" />
               <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#0f172a] border border-[#334155] flex items-center justify-center text-[#915eff] shadow-inner">
                    <User size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-3xl font-black tracking-tight mb-2">{message.name}</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
                          <Mail size={16} className="text-[#915eff]" />
                          <a href={`mailto:${message.email}`} className="hover:text-white transition-colors underline decoration-[#915eff]/30 underline-offset-4">
                            {message.email}
                          </a>
                        </div>
                        <button 
                            onClick={handleCopyEmail}
                            className="p-1 px-2 rounded-md bg-[#0f172a] border border-[#334155] text-slate-500 hover:text-white text-[10px] font-bold uppercase transition-all"
                        >
                            Copy Email
                        </button>
                    </div>
                  </div>
               </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#1e293b] border border-[#334155] flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-[#64748b] text-[10px] font-bold uppercase tracking-widest">
                  <Calendar size={14} className="text-[#915eff]" />
                  Reception Timestamp
                </div>
                <p className="text-white font-bold text-lg">
                  {message.createdAt?.toDate ? message.createdAt.toDate().toLocaleString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }) : 'Syncing...'}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#1e293b] border border-[#334155] flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-[#64748b] text-[10px] font-bold uppercase tracking-widest">
                  <MessageCircle size={14} className="text-[#915eff]" />
                  System State
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <p className="text-white font-bold text-lg capitalize">
                    {message.status} / {message.processingStatus}
                    </p>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#64748b] text-[10px] font-bold uppercase tracking-widest px-1">
                 Content Body
              </div>
              <div className="p-8 rounded-3xl bg-[#1e293b] border border-[#334155] text-slate-200 leading-relaxed text-lg whitespace-pre-wrap min-h-[250px] shadow-inner font-medium">
                {message.message}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-8 border-t border-[#1e293b] bg-[#0f172a] shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-500 font-medium text-sm px-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#915eff]" />
                 Suggested Action
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`mailto:${message.email}?subject=Re: Portfolio Inquiry&body=Hi ${message.name},%0D%0A%0D%0A`}
                  className="bg-[#915eff] py-4 px-10 rounded-2xl text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-[#915eff]/10 hover:bg-[#804dee] active:bg-[#6b3fd4] transition-all flex-1"
                >
                  <Mail size={18} />
                  Draft Official Reply
                </a>
                <button 
                   onClick={onClose}
                   className="bg-[#1e293b] py-4 px-10 rounded-2xl text-white font-bold border border-[#334155] hover:bg-[#334155] transition-all flex-1"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MessageDetail;
