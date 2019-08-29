import React from 'react';
import s from './Dialogs.module.css';
import NameContacts from './NameContacts/NameContacts';
import Messages from './Messages/Messages';
import {toSendActionCreator, onNewMessageChangeActionCreator} from '../../redux/dialogsReducer';


const Dialogs = (props) => {
  
  let NamesElem = props.DialogData.NameData.map(n => 
    <NameContacts id={n.id} name={n.name} />)
    
  let MassagesElem = props.DialogData.MessagesData.map(m => 
  <Messages id={m.id} message={m.message} />)
  
  let newMessageElem = React.createRef ()

  let toSend = () => {
    props.dispatch(toSendActionCreator())
  }
  let onNewMessageChange = () => {
    let newNessage = newMessageElem.current.value
    props.dispatch(onNewMessageChangeActionCreator(newNessage))
  }  
  
  return (
    <div className={s.messagesItem}>
      <div>
        {NamesElem}
      </div>  
      <div>
        {MassagesElem}
        <textarea 
          ref={newMessageElem}
          onChange={onNewMessageChange}
          value={props.NewMessagesData}
        />
        <div>
          <button onClick={toSend}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs