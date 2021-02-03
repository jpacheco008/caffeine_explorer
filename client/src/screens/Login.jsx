import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
      className="login-form"
    >
      <h4 className="login-title">Login</h4>
      <label className="login-label">
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="login-label">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className="login-links-container">
        <Link to="/register" className="login-link">
          Register
        </Link>
        <button className="login-button">Submit</button>
      </div>
    </form>
  );
}
