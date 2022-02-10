import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
                <div className = 'posts'>
                   <Post/>
                   <Post/>
                   <Post/>
                   <Post/>
                   <Post/>

                </div>
            </div>
    );
}

export default MyPosts