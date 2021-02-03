import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Nav.css";

export default function Nav(props) {
  return (
    <div className="nav-container">
      <div className="welcome">
        {props.currentUser ? "Welcome, " + props.currentUser.username : ""}
      </div>
      <Link to="/">
        <img className="logo" src={logo} alt="Caffeine Explorer" />
      </Link>
      <nav>
        <ul>
          {props.currentUser ? (
            <Link to="/profile" className="nav-link">
              <li>Profile</li>
            </Link>
          ) : null}

          {!props.currentUser ? (
            <div className="signins">
              <Link to="/login" className="nav-link">
                <li>Login/Register</li>
              </Link>
            </div>
          ) : (
            <li className="nav-link" onClick={props.handleLogout}>
              Sing Out
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
