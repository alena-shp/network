import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers ({
  postsState: profileReducer,
  dialogState: dialogsReducer,
  sideBar: sidebarReducer,
})

let store = createStore(reducers)

export default store