import s from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to="/profile" className={s.link}>Profile</Link>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/dialogs" className={s.link}>Messages</Link>
            </div>
            <div className={s.item}>
                <Link to="" className={s.link}>News</Link>
            </div>
            <div className={s.item}>
                <Link to="" className={s.link}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to="" className={s.link}>Settings</Link>
            </div>
        </nav>
    );
}
export default Nav;