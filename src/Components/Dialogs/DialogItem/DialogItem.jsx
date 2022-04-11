import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialogsItem}>
            <div className={s.dialogsItemAvatar}>
                <NavLink to ={path}>
                    <img
                        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                        alt=""/>
                </NavLink>
            </div>
            <div className={s.dialogsItemName}>
                <NavLink className={setActive} to={path}>
                    {props.name}
                </NavLink>
            </div>
        </div>)
}
const setActive = ({isActive}) => (isActive) ? (s.active) : (s.item);


export default DialogItem;