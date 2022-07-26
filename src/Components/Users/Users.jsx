import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 50) break;
    }

    return <div>
        <div className={styles.pagesNumbers}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : styles.commonPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        <div className={styles.userList}>
            {props.users.map(u => <div key={u.id} className={styles.userListItem}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "386be8d4-fcbe-49bd-90d7-7f8a442324c5"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "386be8d4-fcbe-49bd-90d7-7f8a442324c5"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    });
                                }
                                }>Follow</button>}
                        </div>
                    </span>
                <span>
                    <span>
                        <div className={styles.userName}>{u.name}</div><div>{u.status}</div>
                    </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)}</div>
    </div>
}

export default Users;