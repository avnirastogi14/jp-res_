import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <button
          className={`nav-btn ${isActive("/grades/overview") ? "active" : ""}`}
          onClick={() => navigate("/grades/overview")}
        >
          Overview
        </button>

        <button
          className={`nav-btn ${isActive("/grades/semester") ? "active" : ""}`}
          onClick={() => navigate("/grades/semester")}
        >
          Semester
        </button>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
