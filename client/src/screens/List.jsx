import Coffee from "../components/Coffee";
import "../styles/List.css";

export default function List(props) {
  const { coffees, currentUser } = props;

  const mappedCoffees = coffees.map((coffee, index) => {
    return (
      <Coffee
        id={coffee.id}
        blend_name={coffee.blend_name}
        imgURL={coffee.picture}
        currentUser={currentUser}
        key={index}
      />
    );
  });
  return <div className="coffees-list">{mappedCoffees}</div>;
}
