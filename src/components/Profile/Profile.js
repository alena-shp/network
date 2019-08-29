import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile = (props) => {
  console.log('props', props)
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer store={props.store}
      />
    </div> 
  )  
}

export default Profile