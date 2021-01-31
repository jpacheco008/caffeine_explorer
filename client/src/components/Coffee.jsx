import {Link} from "react-router-dom";

export default function Coffee(props) {
  const { id, blend_name, imgURL } = props;
  return (
    <Link to={`/coffees/${id}`}>
      <div>
      <h3>{blend_name}</h3>
      <img src={imgURL} alt="Can't find the beans"/>
      </div>
    </Link>
    )
}
