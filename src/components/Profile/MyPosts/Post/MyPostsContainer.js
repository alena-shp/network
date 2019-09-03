import {
  addPostActionCreator,
  onNewPostChangeActionCreator
} from '../../../../redux/profileReducer'
import MyPosts from '../MyPosts'
import {connect} from 'react-redux'

let mapStateToProps = state => {
  return {
    newPostText: state.postsState.newPostText,
    PostData: state.postsState.PostData
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onNewPostChange: text => {
      let action = onNewPostChangeActionCreator(text)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)

export default MyPostsContainer
