import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <aside className="sidebar">
      <button
        className={`side-link ${isActive("/profile") ? "active" : ""}`}
        onClick={() => navigate("/profile")}
      >
        Profile
      </button>

      <button
        className={`side-link ${isActive("/grades") ? "active" : ""}`}
        onClick={() => navigate("/grades/overview")}
      >
        Grades
      </button>
    </aside>
  );
}
