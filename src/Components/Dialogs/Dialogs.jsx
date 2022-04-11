import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.messagesPage.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.addMessage}>
                    <textarea ref = {newMessageElement} className={s.textArea}></textarea>
                    <button onClick={addMessage} className={s.addMessageButton}>Add Post</button>
                    <button className={s.removeMessageButton}>Remove</button>
                </div>
            </div>

        </div>)
}

export default Dialogs;