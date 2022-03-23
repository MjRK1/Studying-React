import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'It\' my first post', likesCount: 11}
    ]
    return (
        <div className={s.postsBlocks}>
            My Posts
            <div className={s.addPost}>
                <textarea className={s.textArea}></textarea>
                <button className={s.addPostButton}>Add Post</button>
                <button className={s.removePostButton}>Remove</button>
            </div>
            <div className={s.posts}>
                <Post className = {postMessage} message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post className = {postMessage} message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    );
}

export default MyPosts