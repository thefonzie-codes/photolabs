import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { state, dispatch } = props;

  const isFavPhotoExist = Object.values(state.favourites).find(x => x === true);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={state.topics}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;