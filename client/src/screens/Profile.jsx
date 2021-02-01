import { getFavorites } from '../services/favorites'
import { useState, useEffect } from 'react';
import Coffee from '../components/Coffee'


export default function Profile(props) {
  
  const [profileData, setProfileData] = useState([]);
  const id = props.currentUser.id;

  useEffect(() => {
    const fetchFavorites = async () => {
      const profileData = await getFavorites(id);
      setProfileData(profileData);
    };
    fetchFavorites();
  }, [id]);

  const favoritesList = profileData.favorites.map((list, index) => {
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
