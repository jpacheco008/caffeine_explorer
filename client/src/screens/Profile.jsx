import { getFavorites } from '../services/favorites'
import { useState, useEffect } from 'react';
import Coffee from '../components/Coffee'
import '../styles/Profile.css'
import { Link } from 'react-router-dom';

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
    <div className='profile-list-container'>
      <div className='profile-welcome-list-container'>
    <h3 className='profile-welcome'>{props.currentUser && props.currentUser.username}'s favorites list:</h3>
      <div className='profile-list'>
      {profileData.favorites && profileData.favorites.map((list, index) => {
        return <Coffee
        id={list.coffee.id}
        blend_name={list.coffee.blend_name}
        imgURL={list.coffee.picture}
        key={index}
        />
      })}
      </div>
      </div>
      <div className='profile-nav'>
      <Link to='/coffees' className='profile-links'>To coffees</Link>
      </div>
    </div>
  )
}
