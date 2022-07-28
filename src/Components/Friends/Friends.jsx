import React from 'react'
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from "./friends.module.css"

const Friends = (props) => {
    let pagesCount = Math.ceil(props.followedUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        if (i == 50) break;
    }
    return ( <>
        <div className={styles.friendsTitle}>Your Friends</div>
        <div className={styles.friends}>
            <div className={styles.pagesNumbers}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.commonPage}
                                 onClick={(e) => {
                                     props.onFriendsPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            <div className={styles.userList}>
                {props.followedUsers.map(u => {
                    if (u.followed == true) {
                        return <div key={u.id} className={styles.userListItem}>
                            <div>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                             className={styles.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div className={styles.Buttons}>
                                    {u.followed
                                        ? <button className={styles.unfollowButton}
                                                  disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollow(u.id);
                                                      props.unfollowFriend(u.id, props.currentPage);
                                                  }}>
                                            Unfollow</button>
                                        : <button className={styles.followButton}
                                                  disabled={props.followingInProgress.some(id => id === u.id)}
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
                </span>
                        </div>
                    }
                })}
            </div>
        </div>
    </>)

}

export default Friends