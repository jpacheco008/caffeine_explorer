import { getFavorites, deleteFavorites } from "../services/favorites";
import { useState, useEffect } from "react";
import Coffee from "../components/Coffee";
import "../styles/Profile.css";
import { Link } from "react-router-dom";

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

  const handleFavDelete = async (id) => {
    await deleteFavorites(id)
    setProfileData(prevState => ({
      ...prevState,
      favorites: prevState.favorites.filter(favorite => {
      return favorite.id !== id})
    }))
  }

  return (
    <div className="profile-list-container">
      <div className="profile-welcome-list-container">
        <h3 className="profile-welcome">
          {props.currentUser && props.currentUser.username}'s favorites list:
        </h3>
        <div className="profile-list">
          {profileData.favorites &&
            profileData.favorites.map((list, index) => {
              return (
                <div className='profile-coffee-container' key={index}>
                <Coffee
                  id={list.coffee.id}
                  blend_name={list.coffee.blend_name}
                  imgURL={list.coffee.picture}
                  />
                  <button
                    className='profile-coffee-button'
                    onClick={()=>{handleFavDelete(list.id)}}
                  >Remove</button>
                  </div>
              );
            })}
        </div>
      </div>
      <div className="profile-nav">
        <Link to="/coffees" className="profile-links">
          To coffees
        </Link>
      </div>
    </div>
  );
}
