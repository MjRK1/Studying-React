import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post className={postMessage} message={p.message}
                                                   likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let removePostText = () => {
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));

    }
    return (
        <div className={s.postsBlocks}>
            My Posts
            <div className={s.addPost}>
                <textarea onChange={onPostChange} ref={newPostElement} className={s.textArea}
                          value={props.newPostText}/>
                <button onClick={addPost} className={s.addPostButton}>Add Post</button>
                <button onClick={removePostText} className={s.removePostButton}>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts