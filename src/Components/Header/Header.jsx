import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import defualtAvatar from '../../assets/images/user.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? <div className={s.userInfo}>
                        {props.image ? <NavLink to={'/profile/' + props.userId}><img className={s.userAvatar}
                                                                                     src={props.image}/></NavLink> :
                            <NavLink to={'/profile/' + props.userId}><img className={s.userAvatar}
                                                                          src={defualtAvatar}/></NavLink>}
                        <NavLink to={'/profile/' + props.userId}>
                            <div className={s.userLogin}>{props.login}</div>
                        </NavLink>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <div className={s.logoName}>
                <div className={s.name}>Sidorenko</div>
            </div>

        </header>
    );
}
export default Header;