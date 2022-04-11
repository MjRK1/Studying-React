import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";
const Friends = (props) => {
    let friendListElement = props.friendsList.map(f =><FriendListItem id = {f.id} name = {f.name}/>)
    return (
        <div className = {s.friends}>
            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friendsList}>
               {friendListElement}
            </div>
        </div>
    )
}

export default Friends;