import { 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronRight,
  ShieldCheck,
  X,
  Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminSidebar = ({ activeTab, setActiveTab, onLogout, isOpen, onClose }) => {
  const menuItems = [
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={18} /> },
    { id: 'analytics', label: 'Analytics', icon: <LayoutDashboard size={18} /> },
    { id: 'settings', label: 'Config', icon: <Settings size={18} /> },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className={`w-64 h-screen fixed left-0 top-0 bg-[#0f172a] border-r border-[#1e293b] flex flex-col z-[1000] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#915eff] flex items-center justify-center shadow-lg shadow-[#915eff]/20">
                <ShieldCheck className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">Admin Console</h2>
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">V1.0.4 - Active</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-[1px] w-full bg-[#1e293b] mb-8" />

          <nav className="flex flex-col gap-1.5">
            <p className="text-[#64748b] text-[10px] font-bold uppercase tracking-widest mb-2 px-3">System Modules</p>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  activeTab === item.id 
                    ? 'bg-[#915eff]/10 text-white' 
                    : 'text-slate-400 hover:bg-[#1e293b] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3 font-semibold text-sm">
                  <span className={`${activeTab === item.id ? 'text-[#915eff]' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </div>
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="sidebar-active-indicator"
                    className="absolute left-0 w-1 h-6 bg-[#915eff] rounded-r-full"
                  />
                )}
                {activeTab === item.id && <ChevronRight size={14} className="text-[#915eff]" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 flex flex-col gap-6">
          <div className="bg-[#1e293b] p-4 rounded-2xl flex items-center gap-3 border border-[#334155]/50 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center border-2 border-slate-600">
               <span className="text-xs font-bold text-slate-300">AD</span>
            </div>
            <div className="min-w-0">
               <p className="text-white text-sm font-bold truncate">Administrator</p>
               <p className="text-slate-500 text-[10px] truncate font-medium">Root Access Level</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3.5 text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all font-bold text-sm group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
