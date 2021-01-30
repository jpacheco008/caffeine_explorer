import Nav from './Nav'

export default function Layout(props) {
  
  return (
    <div>
      <Nav user={props.user}/>
      {props.children}
    </div>
  )
}
