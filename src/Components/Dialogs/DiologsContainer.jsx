import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

class DialogsContainer extends React.Component {
    render() {
        if (this.props.isAuth) {
            return <Navigate to={"/login"}/>
        }
        return <Dialogs dialogsPage={this.props.dialogsPage}
                        updateNewMessageBody={this.props.updateNewMessageBody}
                        sendMessage={this.props.sendMessage}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
