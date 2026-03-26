import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (userName === "prathul" && password === "pokemon") {
      console.log("Login successful");
      navigate("/home");
    } else {
      console.log("Login failed");
      alert("Invalid username or password");
    }
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;