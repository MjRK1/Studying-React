import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post className = {postMessage} message={p.message} likesCount={p.likesCount}/>);
    return (
        <div className={s.postsBlocks}>
            My Posts
            <div className={s.addPost}>
                <textarea className={s.textArea}></textarea>
                <button className={s.addPostButton}>Add Post</button>
                <button className={s.removePostButton}>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts