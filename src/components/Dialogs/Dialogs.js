import React from 'react'
import s from './Dialogs.module.css'
import NameContacts from './NameContacts/NameContacts'
import Messages from './Messages/Messages'

const Dialogs = props => {
  let NamesElem = props.NameData.map(n => (
    <NameContacts id={n.id} name={n.name} />
  ))

  let MassagesElem = props.MessagesData.map(m => (
    <Messages id={m.id} message={m.message} />
  ))

  let newMessageElem = React.createRef()

  let toSend = () => {
    props.toSend()
  }
  let onNewMessageChange = () => {
    let newNessage = newMessageElem.current.value
    props.onNewMessageChange(newNessage)
  }

  return (
    <div className={s.messagesItem}>
      <div>{NamesElem}</div>
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
