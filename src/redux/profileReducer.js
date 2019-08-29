const ADD_POST = 'ADD_POST'
const ON_NEW_POST_CHANGE = 'ON_NEW_POST_CHANGE'

let installState = {
  PostData: [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'It is my first post'},
    {id: 3, message: 'Hello wold'}
  ],
  newPostText: ''}

const profileReducer = (state=installState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText
      }
      state.PostData.push(newPost)
      state.newPostText = ''
      return state
    case ON_NEW_POST_CHANGE:
      state.newPostText = action.newPost
      return state
    default:
      return state
  }
}  

export const addPostActionCreator = () => ({type: ADD_POST})

export const onNewPostChangeActionCreator = (text) =>
  ({type: ON_NEW_POST_CHANGE, newPost: text})

export default profileReducer