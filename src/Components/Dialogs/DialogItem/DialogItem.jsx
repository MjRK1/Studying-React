import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogsItemsName}>
            <NavLink className={setActive} to={path}>{props.name}</NavLink>
        </div>)
}
const setActive = ({isActive}) => (isActive) ? (s.active) : (s.item);


export default DialogItem;