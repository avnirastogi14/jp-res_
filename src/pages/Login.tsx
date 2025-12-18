import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onSuccess: () => void;
};

export default function Login({ onSuccess }: Props) {
  const [enroll, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (enroll === "23103028" && password === "208D00") {
      setError("");
      onSuccess();                 // update auth state
      navigate("/overview");       // 🔑 redirect
    } else {
      setError("Invalid Enrollment Number or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">Login to Your WebKiosk Account</h2>

          <label>Enrollment Number</label>
          <input
            placeholder="Enter enrollment number"
            value={enroll}
            onChange={(e) => setEnroll(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button onClick={handleLogin} className="login-btn">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
