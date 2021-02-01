import { getFavorites } from '../services/favorites'
import { useState, useEffect } from 'react';
import Coffee from '../components/Coffee'

export default function Profile(props) {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  console.log(favorites.favorites[0].coffee.blend_name);
  useEffect(() => {
    const fetchFavorites = async () => {
      const favoritesData = await getFavorites(props.currentUser.id);
      setFavorites(favoritesData);
    };
    fetchFavorites();
  }, []);

  const favoritesList = favorites.favorites.map((list, index) => {
    return <Coffee
      id={list.coffee.id}
      blend_name={list.coffee.blend_name}
      imgURL={list.coffee.picture}
      key={index}
    />
  })
  console.log(favoritesList);
  return (  
    <div>
    <h3>Welcome back {props.currentUser.username}</h3>
    {favoritesList}
    </div>
  )
}
