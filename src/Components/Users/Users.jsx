import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9D%D0%B0%D0%B3%D0%B8%D0%B5%D0%B2_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5_%28cropped%29.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]
    )}
    return <div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
        </div>)}
    </div>
}

export default Users;