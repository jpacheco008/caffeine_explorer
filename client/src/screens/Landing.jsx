import {Link} from 'react-router-dom'

export default function Landing(props) {
  const { currentUser } = props
  
  return (
    <div currentUser={currentUser}>
      <h1>A taste adventure for the caffeine afficionados</h1>
      <Link to='/coffees'>Click here to begin your journey</Link>
    </div>
  )
}
