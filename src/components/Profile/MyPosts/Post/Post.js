import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/5a/de/af/5adeafd9-aefa-fe32-f212-d7cb6e16cbd5/source/512x512bb.jpg' />
      {props.message}
        <div>
          <span>like</span>
        </div>
    </div>
  )
}

export default Post