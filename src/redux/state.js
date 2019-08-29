import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './profileReducer';

let store = {
  _state: {
    dialogState: {
      NameData: [
        {name: 'Sveta', id: 1},
        {name: 'Natalya', id: 2},
        {name: 'Petr', id: 3},
        {name: 'Oleg', id: 4},
        {name: 'Elena', id: 5}
      ],
      MessagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your?'},
        {id: 3, message: 'Good! How is your mood?'}
      ],
      NewMessagesData: ''
    },
    postsState: {
      PostData: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: 'It is my first post'},
        {id: 3, message: 'Hello wold'}
      ],
      newPostText: ''},
    sideBar: {}  
  },

  _rerenderTree() {
    console.log('State changed')
  },

  getState() {
    return this._state
  }, 

  subscribe(observer) {
    this._rerenderTree = observer
  },
  
  dispatch (action) {
    this._state.dialogState = dialogsReducer(this._state.dialogState, action)
    this._state.postsState = profileReducer(this._state.postsState, action)
    this._state.sideBar = sidebarReducer(this._state.sideBar, action)

    this._rerenderTree(this._state)

  }  
}

export default store;
