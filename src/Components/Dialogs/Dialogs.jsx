import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogsItemsName}>
            <NavLink className={setActive} to={path}>{props.name}</NavLink>
        </div>)
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const setActive = ({isActive}) => (isActive) ? (s.active) : (s.item);

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>)
}

export default Dialogs;