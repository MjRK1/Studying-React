import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>

                <div>{messageElement}</div>

                <div className={s.addMessage}>
                    <textarea value={newMessageBody} ref={newMessageElement} className={s.textArea} placeholder='Enter your message' onChange={onNewMessageChange}></textarea>
                    <button onClick={onSendMessageClick} className={s.sendMessageButton}>Send</button>

                </div>
            </div>

        </div>)
}

export default Dialogs;