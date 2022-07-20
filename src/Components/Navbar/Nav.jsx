import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./FriendList/Friends";
import store from "../../redux/redux-store";

const setActive = ({isActive}) => isActive ? s.active : s.item;

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>
            <Friends friendsList={store.getState().sidebarData.friendsList}/>
        </nav>);
}
export default Nav;