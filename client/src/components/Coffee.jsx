import {Link} from "react-router-dom";

export default function Coffee(props) {
  const { id, blend_name, origin, variety, notes, intensifier,
    caffeine_level, imgURL,currentUser } = props;
  return (
    <Link to={`/coffees/${id}`}>
      <h3>{blend_name}</h3>
      <h5>{origin}</h5>
      <h5>{variety}</h5>
      <h5>{notes}</h5>
      <h5>{intensifier}</h5>
      <h5>{caffeine_level}</h5>
    </Link>
    )
}
