import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { motion } from "framer-motion";
import { Lock, Mail, Loader2 } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#0f172a] p-6 selection:bg-[#915eff]/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#915eff]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-[#915eff]/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#1e293b] border border-[#334155] p-8 sm:p-10 rounded-3xl shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#915eff] rounded-2xl flex items-center justify-center shadow-lg shadow-[#915eff]/20 mb-6">
            <Lock className="text-white" size={32} />
          </div>
          <h2 className="text-white font-bold text-3xl mb-2">Admin Portal</h2>
          <p className="text-slate-400 text-center font-medium">
            Authorized personnel only. Please sign in to continue.
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-semibold ml-1">Email Address</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#915eff] transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#0f172a] py-3.5 pl-12 pr-4 text-white rounded-xl outline-none border border-[#334155] focus:border-[#915eff] focus:ring-1 focus:ring-[#915eff]/50 transition-all font-medium"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-300 text-sm font-semibold ml-1">Password</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#915eff] transition-colors">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0f172a] py-3.5 pl-12 pr-4 text-white rounded-xl outline-none border border-[#334155] focus:border-[#915eff] focus:ring-1 focus:ring-[#915eff]/50 transition-all font-medium"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-3 px-4 rounded-xl font-medium"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#915eff] hover:bg-[#804dee] active:bg-[#6b3fd4] py-4 rounded-xl outline-none w-full text-white font-bold shadow-lg shadow-[#915eff]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Signing in...
              </>
            ) : "Sign In to Dashboard"}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Security Notice: All login attempts are logged and monitored.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
