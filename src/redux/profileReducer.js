const ADD_POST = 'ADD_POST'
const ON_NEW_POST_CHANGE = 'ON_NEW_POST_CHANGE'

let installState = {
  PostData: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It is my first post' },
    { id: 3, message: 'Hello wold' }
  ],
  newPostText: ''
}

const profileReducer = (state = installState, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = state.PostData.length + 1
      const message = state.newPostText
      return {
        ...state,
        newPostText: '',
        PostData: [...state.PostData, { id, message }]
      }
    case ON_NEW_POST_CHANGE:
      return {
        ...state,
        newPostText: action.newPost
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onNewPostChangeActionCreator = text => ({
  type: ON_NEW_POST_CHANGE,
  newPost: text
})

export default profileReducer
