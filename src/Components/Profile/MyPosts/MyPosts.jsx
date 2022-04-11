import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post className = {postMessage} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlocks}>
            My Posts
            <div className={s.addPost}>
                <textarea ref = {newPostElement} className={s.textArea}></textarea>
                <button onClick={addPost} className={s.addPostButton}>Add Post</button>
                <button className={s.removePostButton}>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts