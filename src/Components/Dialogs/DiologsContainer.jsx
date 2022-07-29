import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, {updateNewMessageBody, sendMessage})(AuthRedirectComponent);
