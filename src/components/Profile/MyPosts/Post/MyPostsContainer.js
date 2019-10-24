import {
  addPost,
  onNewPostChange
} from '../../../../redux/profileReducer'
import MyPosts from '../MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = state => {
  return {
    newPostText: state.postsState.newPostText,
    PostData: state.postsState.PostData
  }
}

const MyPostsContainer = connect(
  mapStateToProps,
  {addPost, onNewPostChange}
)(MyPosts)

export default MyPostsContainer
