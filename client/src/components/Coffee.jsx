import { Link } from "react-router-dom";
import "../styles/Coffee.css"

export default function Coffee(props) {
  const { id, blend_name, imgURL } = props;
  return (
    <Link className='coffee' to={`/coffees/${id}`}>
      <div className='details-container'>
      <h3 className='coffee-blend-name'>{blend_name}</h3>
      <img className='coffee-img' src={imgURL} alt="Can't find the beans"/>
      </div>
    </Link>
    )
}
