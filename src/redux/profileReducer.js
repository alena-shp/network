const ADD_POST = 'ADD_POST'
const ON_NEW_POST_CHANGE = 'ON_NEW_POST_CHANGE'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let installState = {
  PostData: [
    { id: 1, message: 'Hi, how are you?' },
    { id: 2, message: 'It is my first post' },
    { id: 3, message: 'Hello wold' }
  ],
  newPostText: '',
  profile: null
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export const addPost = () => ({ type: ADD_POST })

export const onNewPostChange = text => ({
  type: ON_NEW_POST_CHANGE,
  newPost: text
})

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
})

export default profileReducer
