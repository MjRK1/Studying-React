import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlocks}>
            My Posts
            <div className={s.addPost}>
                <textarea className={s.textArea}></textarea>
                <button className={s.addPostButton}>Add Post</button>
                <button className={s.removePostButton}>Remove</button>
            </div>
            <div className={s.posts}>
                <Post className = {postMessage} message='Hi, how are you?' likesCount="0"/>
                <Post className = {postMessage} message="It's my first post" likesCount="23"/>
                <Post className = {postMessage} message='Hi, how are you?'/>
                <Post className = {postMessage} message="It's my first post"/>
            </div>
        </div>
    );
}

export default MyPosts