import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs dialogsPage={this.props.dialogsPage}
                        updateNewMessageBody={this.props.updateNewMessageBody}
                        sendMessage={this.props.sendMessage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}*/
export default connect(mapStateToProps, {updateNewMessageBody, sendMessage})(DialogsContainer);
