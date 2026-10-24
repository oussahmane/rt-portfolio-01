import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import { About, Contact, Experience, Hero, Navbar, Skills, Works } from "./components";
import { LanguageProvider, useLanguage } from "./utils/i18n";
import { scrollToSection } from "./utils/scroll";

const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const AdminLogin = lazy(() => import("./components/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./components/admin/AdminDashboard"));
const ProtectedRoute = lazy(() => import("./components/admin/ProtectedRoute"));

const Portfolio = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Works />
    <Contact />
  </>
);

const AdminFallback = () => <div className="min-h-screen bg-primary" />;

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const { t } = useLanguage();

  return (
    <div className={`relative z-0 min-h-screen ${isAdminRoute ? "bg-[#0f172a]" : "bg-primary"}`}>
      {!isAdminRoute && (
        <a
          className="skip-link"
          href="#about"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("about");
          }}
        >
          {t("nav.skip")}
        </a>
      )}
      {!isAdminRoute && <Navbar />}
      <main>
        <Suspense fallback={<AdminFallback />}>
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
        </Suspense>
      </main>
      {!isAdminRoute && (
        <Suspense fallback={<div className="galaxy-fallback no-print" aria-hidden="true" />}>
          <StarsCanvas />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <AppContent />
        </HashRouter>
      </MotionConfig>
    </LanguageProvider>
  );
};

export default App;
