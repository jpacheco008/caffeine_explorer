import { Link } from 'react-router-dom'
import '../styles/Landing.css'

export default function Landing(props) {
  const { currentUser } = props
  
  return (
    <div currentUser={currentUser} className='landing-container'>
      <div className='text-container'>
      <h1 className='landing-title'>A taste adventure for the caffeine afficionados</h1>
      <Link to='/coffees' className='landing-link'>Click here to begin your journey</Link>
      </div>
    </div>
  )
}
