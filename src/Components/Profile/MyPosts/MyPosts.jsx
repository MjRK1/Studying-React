import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\' my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
    let postsElements = posts.map(p => <Post className = {postMessage} message={p.message} likesCount={p.likesCount}/>);
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