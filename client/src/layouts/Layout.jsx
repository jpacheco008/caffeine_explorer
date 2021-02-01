import Nav from './Nav'

export default function Layout(props) {
  
  return (
    <div>
      <Nav currentUser={props.currentUser}
        handleLogout={props.handleLogout} />
      {props.children}
    </div>
  )
}
