import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader'

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div>ava + description</div>
    </div>
  )
}

export default ProfileInfo
