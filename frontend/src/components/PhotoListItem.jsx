import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photo, setUserLikes, userLikes, setHidden, setPhotoData } = props;
  const { id, user, urls, location } = photo;
  /* Insert React */

  const [favourite, setFavourite] = useState(false);
  const handleUserFavourite = () => favourite ? (setFavourite(false), setUserLikes(userLikes - 1)) : (setFavourite(true), setUserLikes(userLikes + 1));

  const handleClick = () => {
    setHidden(false);
    setPhotoData(id - 1);
  }

  return (
    <article className="photo-list__item">
      <PhotoFavButton 
        handleUserFavourite={() => handleUserFavourite()} selected={favourite} />
      <img onClick={() => handleClick()} className="photo-list__image" src={urls.full} />
      <div>
        <img className="profile photo-list__user-profile" src={user.profile} />
        <div className="photo-list__user-info">
          <h1>{user.username}</h1>
          <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
