import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom'
import React, {useEffect} from "react";
import {useForm, useWatch} from "react-hook-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>

                <div>{messageElement}</div>
                <AddMessageForm sendMessage={onSendMessageClick} updateNewMessageBody={props.updateNewMessageBody}/>
            </div>

        </div>)
}


export default Dialogs;