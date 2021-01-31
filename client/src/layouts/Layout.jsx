import Nav from './Nav'

export default function Layout(props) {
  
  return (
    <div>
      <Nav currentUser={props.currentUser}/>
      {props.children}
    </div>
  )
}
