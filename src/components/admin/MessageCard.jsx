import React from 'react';
import { 
  Mail, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Undo2,
  ChevronRight,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';

const MessageCard = ({ 
  message, 
  onToggleRead, 
  onToggleResolve, 
  onDelete,
  onClick
}) => {
  const isRead = message.status === 'read';
  const isResolved = message.processingStatus === 'resolved';

  return (
    <motion.div
      layout
      onClick={() => onClick(message)}
      className={`group relative flex flex-col p-6 bg-[#1e293b] border rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/20 ${
        !isRead ? 'border-[#915eff]/40 ring-1 ring-[#915eff]/20 shadow-lg shadow-[#915eff]/5' : 'border-[#334155] opacity-90 hover:opacity-100 hover:border-[#475569]'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            !isRead ? 'bg-[#915eff] text-white' : 'bg-[#0f172a] text-slate-500'
          }`}>
            <Mail size={18} />
          </div>
          <div className="min-w-0">
            <h3 className={`font-bold text-sm truncate max-w-[150px] sm:max-w-[200px] ${!isRead ? 'text-white' : 'text-slate-300'}`}>
              {message.name}
            </h3>
            <p className="text-slate-500 text-[11px] font-medium truncate">{message.email}</p>
          </div>
        </div>
        
        <div className="text-right flex-shrink-0">
          <p className="text-slate-500 text-[10px] uppercase tracking-tighter font-bold">
            {message.createdAt?.toDate ? message.createdAt.toDate().toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric'
            }) : 'Syncing...'}
          </p>
        </div>
      </div>

      <div className="flex-1 mb-6">
        <p className={`text-sm leading-relaxed line-clamp-2 ${!isRead ? 'text-slate-300 font-medium' : 'text-slate-400 font-normal'}`}>
          {message.message}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#334155]/50">
        <div className="flex gap-1.5">
          <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 ${
            isResolved ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
          }`}>
            {isResolved ? <CheckCircle2 size={10} /> : <Clock size={10} />}
            {isResolved ? 'Resolved' : 'Pending'}
          </span>
          {!isRead && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-[#915eff]/10 text-[#915eff] border border-[#915eff]/20 animate-pulse">
              New
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 transition-opacity duration-200">
          <button
            onClick={(e) => { e.stopPropagation(); onToggleRead(message.id, message.status); }}
            title={isRead ? "Mark as unread" : "Mark as read"}
            className="p-1.5 rounded-lg bg-[#0f172a] text-slate-400 hover:text-white hover:bg-[#334155] transition-all"
          >
            {isRead ? <Undo2 size={14} /> : <Eye size={14} />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(message.id); }}
            title="Archive/Delete"
            className="p-1.5 rounded-lg bg-[#0f172a] text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all border border-transparent hover:border-red-400/20"
          >
            <Trash2 size={14} />
          </button>
          <div className="w-1.5" />
          <div className="text-slate-500 group-hover:text-[#915eff] transition-colors group-hover:translate-x-0.5 transform duration-300">
             <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageCard;
