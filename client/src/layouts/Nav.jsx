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
          {props.user ? "Welcome " + props.user.username : ""}
        </div>
        <nav>
          <ul>
            <Link to="/profile" className="nav-link">
              <li>Profile</li>
            </Link>
            { !props.user ?
              <div className='signins'>
              <Link to="/login" className="nav-link"><li>Login/Register</li></Link>
              </div>            
              :
              <Link to="/logout" className="nav-link">
                <li>Sign Out</li>
            </Link>   
              
            }
          </ul>
        </nav>
      </div>
  )
}
