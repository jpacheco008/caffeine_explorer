import { getFavorites } from '../services/favorites'
import { useState, useEffect } from 'react';
import Coffee from '../components/Coffee'


export default function Profile(props) {
  
  const [profileData, setProfileData] = useState([]);
  
  useEffect(() => {
    const fetchFavorites = async () => {
      const id = props.currentUser && props.currentUser.id;
      const profileData = await getFavorites(id);
      setProfileData(profileData);
    };
    fetchFavorites();
  }, [props.currentUser]);

  return (  
    <div>
    <h3>Welcome back {props.currentUser && props.currentUser.username}</h3>
    {profileData.favorites && profileData.favorites.map((list, index) => {
    return <Coffee
      id={list.coffee.id}
      blend_name={list.coffee.blend_name}
      imgURL={list.coffee.picture}
      key={index}
    />
  })}
    </div>
  )
}
