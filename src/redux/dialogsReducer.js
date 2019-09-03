const ON_NEW_MESSAGE_CHANGE = 'ON_NEW_MESSAGE_CHANGE'
const TO_SEND = 'TO_SEND'

let installState = {
  NameData: [
    { name: 'Sveta', id: 1 },
    { name: 'Natalya', id: 2 },
    { name: 'Petr', id: 3 },
    { name: 'Oleg', id: 4 },
    { name: 'Elena', id: 5 }
  ],
  MessagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your?' },
    { id: 3, message: 'Good! How is your mood?' }
  ],
  NewMessagesData: ''
}

const dialogsReducer = (state = installState, action) => {
  switch (action.type) {
    case ON_NEW_MESSAGE_CHANGE:
      return {
        ...state,
        NewMessagesData: action.messagePost
      }
    case TO_SEND:
      const id = state.MessagesData.length + 1
      const message = state.NewMessagesData
      return {
        ...state,
        NewMessagesData: '',
        MessagesData: [...state.MessagesData, { id, message }]
      }
    default:
      return state
  }
}

export const toSendActionCreator = () => ({ type: TO_SEND })

export const onNewMessageChangeActionCreator = newMessage => ({
  type: ON_NEW_MESSAGE_CHANGE,
  messagePost: newMessage
})

export default dialogsReducer
