import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  postsState: profileReducer,
  dialogState: dialogsReducer,
  sideBar: sidebarReducer,
  usersPage: usersReducer,
})

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
