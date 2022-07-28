import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 30) break;
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
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={styles.Buttons}>
                            {u.followed
                                ? <button className={styles.unfollowButton} disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id);
                                          }}>
                                    Unfollow</button>
                                : <button className={styles.followButton} disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id);
                                          }}>
                                    Follow</button>}
                        </div>
                    </div>
                <span>
                    <span>
                        <div className={styles.userName}>{u.name}</div><div>{u.status}</div>
                    </span>
                        {/*<span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>*/}
                </span>
            </div>)}
        </div>
    </div>
}

export default Users;