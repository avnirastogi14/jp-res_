import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function GradesLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
