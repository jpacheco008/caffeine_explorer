import Coffee from '../components/Coffee'
import Search from '../components/Search'
// import {useState} from 'react'

export default function List(props) {
  const { coffees, currentUser } = props
 
  
  const handleSearch = (event) => {
    coffees.filter((coffee) =>
    coffee.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  };
  const handleSubmit = (event) => event.preventDefault();
  
  const mappedCoffees = coffees.map((coffee, index) => {
    return <Coffee
      id={coffee.id}
      blend_name={coffee.blend_name}
      origin={coffee.origin}
      variety={coffee.variety}
      notes={coffee.notes}
      intensifier={coffee.intensifier}
      caffeine_level={coffee.caffeine_level}
      imgURL={coffee}
      currentUser={currentUser}
      key={index}
    />
  })
    return (
      <div>
        <Search
          onSubmit={handleSubmit}
          onChange={handleSearch}
        />
      {mappedCoffees}
    </div>
  )
}
