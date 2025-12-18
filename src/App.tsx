import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Semester from "./pages/Semester";
import Profile from "./pages/Profile";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Persist login on refresh
  useEffect(() => {
    const logged = localStorage.getItem("loggedIn");
    if (logged === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/grades/overview" replace />
          ) : (
            <Login onSuccess={handleLoginSuccess} />
          )
        }
      />

      {/* PROTECTED ROUTES */}
      {isLoggedIn ? (
        <>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/grades/overview" replace />} />

          {/* SHARED LAYOUT (SIDEBAR + NAVBAR) */}
          <Route element={<AppLayout />}>
            {/* GRADES */}
            <Route path="/grades/overview" element={<Overview />} />
            <Route path="/grades/semester" element={<Semester />} />

            {/* PROFILE */}
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/grades/overview" replace />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}
