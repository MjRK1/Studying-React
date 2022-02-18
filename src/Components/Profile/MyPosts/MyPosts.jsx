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
                   <Post message = 'Hi, how are you?'/>
                   <Post message = "It's my first post"/>

                </div>
            </div>
    );
}

export default MyPosts