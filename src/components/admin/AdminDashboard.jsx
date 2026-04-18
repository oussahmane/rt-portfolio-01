import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  RefreshCw, 
  MessageSquare, 
  Menu, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Calendar,
  Settings as SettingsIcon,
  Bell
} from "lucide-react";

import AdminSidebar from "./AdminSidebar";
import MessageCard from "./MessageCard";
import MessageDetail from "./MessageDetail";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("messages");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProcess, setFilterProcess] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        status: doc.data().status || "unread",
        processingStatus: doc.data().processingStatus || "pending",
        ...doc.data()
      }));
      setMessages(msgs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin/login");
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleRead = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "read" ? "unread" : "read";
      await updateDoc(doc(db, "messages", id), { status: newStatus });
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleToggleResolve = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "resolved" ? "pending" : "resolved";
      await updateDoc(doc(db, "messages", id), { processingStatus: newStatus });
    } catch (err) {
      console.error("Error updating processing status:", err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, "messages", id));
        if (selectedMessage?.id === id) setSelectedMessage(null);
      } catch (err) {
        console.error("Error deleting message:", err);
      }
    }
  };

  const handleOpenDetail = (message) => {
    setSelectedMessage(message);
    if (message.status === "unread") {
      handleToggleRead(message.id, "unread");
    }
  };

  const handleCloseDetail = () => {
    setSelectedMessage(null);
  };

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesSearch = 
        msg.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.message?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = filterStatus === "all" || msg.status === filterStatus;
      const matchesProcess = filterProcess === "all" || msg.processingStatus === filterProcess;

      return matchesSearch && matchesStatus && matchesProcess;
    });
  }, [messages, searchQuery, filterStatus, filterProcess]);

  const stats = useMemo(() => ({
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    pending: messages.filter(m => m.processingStatus === 'pending').length
  }), [messages]);

  return (
    <div className="min-h-screen bg-[#0f172a] flex overflow-hidden font-sans selection:bg-[#915eff]/30">
      <AdminSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 lg:ml-64 flex flex-col h-screen overflow-hidden">
        {/* Top Header Navigation */}
        <header className="h-16 bg-[#0f172a] border-b border-[#1e293b] flex items-center justify-between px-4 sm:px-8 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <span>Admin</span>
              <span>/</span>
              <span className="text-white">{activeTab}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
               <Bell size={20} />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0f172a]" />
            </button>
            <div className="h-8 w-[1px] bg-[#1e293b]" />
            <div className="flex items-center gap-3 pl-2">
               <div className="text-right hidden sm:block">
                  <p className="text-white text-xs font-bold leading-tight">System Root</p>
                  <p className="text-slate-500 text-[10px] font-medium">Online</p>
               </div>
               <div className="w-8 h-8 rounded-full bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[10px] font-bold text-slate-400">
                  ROOT
               </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0f172a]">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-10">
              <h1 className="text-white font-bold text-3xl sm:text-4xl tracking-tight capitalize">
                {activeTab} Management
              </h1>
              <p className="text-slate-400 font-medium text-base mt-2">
                Manage and monitor your portfolio system in real-time.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-2xl flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Total Messages</span>
                  <MessageSquare size={16} />
                </div>
                <p className="text-3xl font-black text-white">{stats.total}</p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-green-400 mt-2">
                   <TrendingUp size={12} />
                   <span>+12.5% this week</span>
                </div>
              </div>

              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-2xl flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Unread</span>
                  <Bell size={16} />
                </div>
                <p className="text-3xl font-black text-[#915eff]">{stats.unread}</p>
                <p className="text-slate-500 text-xs font-bold mt-2">Priority attention needed</p>
              </div>

              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-2xl flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Pending</span>
                  <Calendar size={16} />
                </div>
                <p className="text-3xl font-black text-amber-500">{stats.pending}</p>
                <p className="text-slate-500 text-xs font-bold mt-2">Requires followup</p>
              </div>

              <div className="bg-[#1e293b] border border-[#334155] p-5 rounded-2xl flex flex-col gap-1">
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest">Security Status</span>
                  <ShieldCheck size={16} />
                </div>
                <p className="text-3xl font-black text-blue-400 uppercase tracking-tighter">Secure</p>
                <p className="text-slate-500 text-xs font-bold mt-2">Firewall optimized</p>
              </div>
            </div>

            {activeTab === 'messages' && (
              <div className="space-y-6">
                {/* Toolbar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 bg-[#1e293b] border border-[#334155] rounded-2xl shadow-sm">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#0f172a] py-3 pl-12 pr-4 text-white rounded-xl border border-[#334155] outline-none focus:border-[#915eff] transition-all font-medium placeholder:text-slate-600"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-2 text-slate-300 text-xs font-bold">
                      <Filter size={14} className="text-slate-500" />
                      <span>Status:</span>
                      <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="bg-transparent border-none outline-none focus:ring-0 cursor-pointer"
                      >
                        <option value="all">All</option>
                        <option value="unread">Unread</option>
                        <option value="read">Read</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2 bg-[#0f172a] border border-[#334155] rounded-xl px-4 py-2 text-slate-300 text-xs font-bold">
                      <SlidersHorizontal size={14} className="text-slate-500" />
                      <span>Process:</span>
                      <select 
                        value={filterProcess}
                        onChange={(e) => setFilterProcess(e.target.value)}
                        className="bg-transparent border-none outline-none focus:ring-0 cursor-pointer"
                      >
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>

                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setFilterStatus("all");
                        setFilterProcess("all");
                      }}
                      className="p-2.5 bg-[#0f172a] border border-[#334155] rounded-xl text-slate-400 hover:text-white transition-colors"
                      title="Reset Filters"
                    >
                      <RefreshCw size={18} />
                    </button>
                  </div>
                </div>

                {/* Messages Grid */}
                {loading ? (
                  <div className="flex flex-col justify-center items-center h-96 gap-4">
                    <div className="w-12 h-12 border-4 border-t-[#915eff] border-[#334155] rounded-full animate-spin" />
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Syncing data...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
                    <AnimatePresence>
                      {filteredMessages.map((msg) => (
                        <MessageCard
                          key={msg.id}
                          message={msg}
                          onToggleRead={handleToggleRead}
                          onToggleResolve={handleToggleResolve}
                          onDelete={handleDelete}
                          onClick={handleOpenDetail}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                )}

                {!loading && filteredMessages.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-32 bg-[#1e293b] rounded-3xl border border-dashed border-[#334155] flex flex-col items-center justify-center p-8"
                  >
                    <div className="w-20 h-20 bg-[#0f172a] rounded-full flex items-center justify-center mb-6 text-slate-600">
                       <MessageSquare size={40} />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">No Matching Data</h3>
                    <p className="text-slate-500 font-medium max-w-xs mx-auto">
                      Adjust your filters or try a different search term to find what you're looking for.
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="bg-[#1e293b] border border-[#334155] p-10 rounded-3xl text-center">
                    <div className="w-20 h-20 bg-[#0f172a] rounded-full flex items-center justify-center mx-auto mb-8 text-[#915eff]">
                       <TrendingUp size={40} />
                    </div>
                    <h2 className="text-white text-2xl font-bold mb-4">Traffic Statistics</h2>
                    <p className="text-slate-400 max-w-md mx-auto font-medium">
                        Advanced analytics and user behavioral tracking modules are currently being synchronized with your portfolio.
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="h-2 bg-[#0f172a] rounded-full overflow-hidden">
                           <div className="w-[75%] h-full bg-[#915eff]" />
                        </div>
                        <div className="h-2 bg-[#0f172a] rounded-full overflow-hidden">
                           <div className="w-[45%] h-full bg-blue-500" />
                        </div>
                        <div className="h-2 bg-[#0f172a] rounded-full overflow-hidden">
                           <div className="w-[90%] h-full bg-green-500" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-3xl h-64 flex flex-col justify-end">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Visitor Origin</p>
                        <h3 className="text-white text-4xl font-black mb-4 tracking-tighter">Algeria, DZ</h3>
                        <p className="text-slate-400 font-medium text-sm">Primary traffic source for the current session.</p>
                    </div>
                    <div className="bg-[#1e293b] border border-[#334155] p-8 rounded-3xl h-64 flex flex-col justify-end">
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">Avg Session</p>
                        <h3 className="text-white text-4xl font-black mb-4 tracking-tighter">04:12m</h3>
                        <p className="text-slate-400 font-medium text-sm">User retention duration is 15% above average.</p>
                    </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="max-w-4xl space-y-6">
                <div className="bg-[#1e293b] border border-[#334155] rounded-3xl overflow-hidden">
                    <div className="p-8 border-b border-[#334155]">
                        <h3 className="text-white font-bold text-xl mb-1">System Configuration</h3>
                        <p className="text-slate-500 text-sm">Manage global settings and security parameters.</p>
                    </div>
                    <div className="p-8 space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white font-bold mb-1">Portfolio Visibility</p>
                                <p className="text-slate-500 text-xs font-medium">Allow search engines to index your portfolio.</p>
                            </div>
                            <div className="w-12 h-6 bg-[#915eff] rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white font-bold mb-1">Email Notifications</p>
                                <p className="text-slate-500 text-xs font-medium">Receive real-time alerts for new messages.</p>
                            </div>
                            <div className="w-12 h-6 bg-[#334155] rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full mr-auto" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white font-bold mb-1">Maintenance Mode</p>
                                <p className="text-slate-500 text-xs font-medium">Show maintenance screen to all visitors.</p>
                            </div>
                            <div className="w-12 h-6 bg-[#334155] rounded-full relative p-1 cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full mr-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="p-8 bg-[#0f172a]/50 flex justify-end gap-4 border-t border-[#334155]">
                        <button className="px-6 py-2.5 rounded-xl text-slate-400 font-bold text-sm hover:text-white transition-colors">Discard</button>
                        <button className="px-6 py-2.5 rounded-xl bg-[#915eff] text-white font-bold text-sm shadow-lg shadow-[#915eff]/20">Save Changes</button>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <MessageDetail
        message={selectedMessage}
        isOpen={!!selectedMessage}
        onClose={handleCloseDetail}
        onToggleRead={handleToggleRead}
        onToggleResolve={handleToggleResolve}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminDashboard;
