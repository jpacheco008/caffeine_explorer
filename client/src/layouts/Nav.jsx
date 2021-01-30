import {Link} from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className="nav-container">
        <Link to="/">
          {/* <img
            className="logo"
            src="https://i.imgur.com/2UtSIpm.png"
            alt="Cool Ridings"
          /> */}
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
              <Link to="/sign-in" className="nav-link"><li>Login/Register</li></Link>
              </div>            
              :
              <Link to="/sign-out" className="nav-link">
                <li>Sign Out</li>
            </Link>   
              
            }
          </ul>
        </nav>
      </div>
  )
}
