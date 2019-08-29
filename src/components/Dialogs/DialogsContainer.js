import React from 'react';
import {toSendActionCreator, onNewMessageChangeActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  console.log('props', props)
  let state = props.store.getState()

  let toSend = () => {
    props.store.dispatch(toSendActionCreator())
  }
  let onNewMessageChange = (newNessage) => {
    props.store.dispatch(onNewMessageChangeActionCreator(newNessage))
  }  
  
  return (
    <Dialogs 
      toSend={toSend}
      onNewMessageChange={onNewMessageChange}
      NameData={state.dialogState.NameData}
      MessagesData={state.dialogState.MessagesData}
      NewMessagesData={state.dialogState.NewMessagesData}
    />
  )
}

export default DialogsContainer