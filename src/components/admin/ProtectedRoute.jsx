import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return (
    <div className="w-full h-screen flex items-center justify-center bg-primary">
      <div className="w-10 h-10 border-4 border-t-[#915eff] border-white/10 rounded-full animate-spin" />
    </div>
  );

  if (!user) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;
