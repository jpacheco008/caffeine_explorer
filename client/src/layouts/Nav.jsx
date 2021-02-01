import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Nav(props) {
  return (
    <div className="nav-container">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Caffeine Explorer"
          />
        </Link>
        <div className="welcome">
          {props.currentUser ? "Welcome " + props.currentUser.username : ""}
        </div>
        <nav>
          <ul>
            <Link to="/profile" className="nav-link">
              <li>Profile</li>
            </Link>
            { !props.currentUser ?
              <div className='signins'>
              <Link to="/login" className="nav-link"><li>Login/Register</li></Link>
              </div>            
              :
              <button onClick={props.handleLogout}>Sing Out</button>            
            }
          </ul>
        </nav>
      </div>
  )
}
