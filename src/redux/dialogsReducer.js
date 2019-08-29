const ON_NEW_MESSAGE_CHANGE = 'ON_NEW_MESSAGE_CHANGE'
const TO_SEND = 'TO_SEND'

let installState = {
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
}  

const dialogsReducer = (state = installState, action) => {
  switch (action.type) {
    case TO_SEND:
     let messagePost = {
      id: 4,
      message: state.NewMessagesData
    }
    state.MessagesData.push(messagePost)
    state.NewMessagesData = ''
      return state
    case ON_NEW_MESSAGE_CHANGE:
    state.NewMessagesData = action.messagePost
      return state
    default:
      return state
  }
}  

export const toSendActionCreator = () => ({type: TO_SEND})

export const onNewMessageChangeActionCreator = (newMessage) =>
({type: ON_NEW_MESSAGE_CHANGE, messagePost: newMessage})

export default dialogsReducer