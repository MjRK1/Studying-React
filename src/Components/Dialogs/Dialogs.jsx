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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message = "Hi"/>
                <Message message = "Hi, how is your it-kamasutra?"/>
                <Message message = "Yo"/>
                <Message message = "Yo"/>
                <Message message = "Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;