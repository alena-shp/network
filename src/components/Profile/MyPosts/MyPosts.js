import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let Posts = props.PostData.map( p => < Post id={p.id} message={p.message} />)

  let NewPostElem = React.createRef()
  
  let addPost = () => {
    props.addPost()
  }
  let onNewPostChange = () => {
    let text = NewPostElem.current.value
    props.onNewPostChange(text)
  }
 
  return (
    <div className={s.postBlok}>
      <h3>My post</h3>
        <div>
          <div>
            <textarea
              ref={NewPostElem} 
              onChange={onNewPostChange}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      <div className={s.posts}>
       {Posts}
      </div>
    </div>
  )
}

export default MyPosts