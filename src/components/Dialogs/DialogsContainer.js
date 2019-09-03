import {
  toSendActionCreator,
  onNewMessageChangeActionCreator
} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = state => {
  return {
    NameData: state.dialogState.NameData,
    MessagesData: state.dialogState.MessagesData,
    NewMessagesData: state.dialogState.NewMessagesData
  }
}
let mapDispatchToProps = dispatch => {
  return {
    toSend: () => {
      dispatch(toSendActionCreator())
    },
    onNewMessageChange: newNessage => {
      dispatch(onNewMessageChangeActionCreator(newNessage))
    }
  }
}

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)

export default DialogsContainer
