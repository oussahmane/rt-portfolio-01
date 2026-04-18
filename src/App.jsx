import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Skills, Works, StarsCanvas } from "./components";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import { LanguageProvider } from "./utils/i18n";

const Portfolio = () => (
  <div className='relative z-0'>
    <div className='relative z-0'>
      <Hero />
    </div>
    <About />
    <Skills />
    <Experience />
    <Works />
    <div className='relative z-0'>
      <Contact />
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className={`relative z-0 overflow-hidden ${isAdminRoute ? 'bg-[#0f172a]' : 'bg-primary'}`}>
      {!isAdminRoute && <Navbar />}
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
      {!isAdminRoute && <StarsCanvas />}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
