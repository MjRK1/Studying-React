import s from "../FriendList.module.css"
import {NavLink} from "react-router-dom";
const FriendListItem = (props) => {
    let path = "/profile/" + props.id;
    return (
        <div className={s.friendsListItem}>
            <div className={s.friendsListAvatar}>
                <NavLink to ={path}>
                    <img
                        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
                        alt=""/>
                </NavLink>
            </div>
            <div className={s.friendsListName}>
                <NavLink className={s.itemName} to={path}>
                    {props.name}
                </NavLink>
            </div>
        </div>
    )
}


export default FriendListItem