import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = React.memo((props) => {
    console.log("RENDER")
    let postsElements = [...props.posts].reverse().map(p => <Post className={postMessage} message={p.message}
                                                   likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlocks}>
            My Posts
            <AddPostForm addPost={props.addPost} onPostchange={props.updateNewPostText}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});


export default MyPosts