import React from 'react'
import {addPostActionCreator, onNewPostChangeActionCreator} from '../../../../redux/profileReducer';
import MyPosts from '../MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState()
  console.log('MyPostsContainer state', state)
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  let onNewPostChange = (text) => {
    let action = onNewPostChangeActionCreator(text)
    props.store.dispatch(action)
  }
  return (
    <MyPosts 
      addPost={addPost}
      onNewPostChange={onNewPostChange}
      newPostText={state.newPostText} 
      PostData={state.postsState.PostData}
    />
  )  
}

export default MyPostsContainer