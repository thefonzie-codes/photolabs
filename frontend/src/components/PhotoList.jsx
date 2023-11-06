import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({ state, dispatch }) => {

  const photoListItemComponents = state.photos.map(photo =>
    <PhotoListItem
      photo={photo}
      key={photo.id}
      state={state}
      dispatch={dispatch}
    />
  );

  return (
    <ul className="photo-list">
      {photoListItemComponents}
    </ul>
  );
};

export default PhotoList;
