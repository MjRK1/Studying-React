import React from "react";

import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class MyPostsContainer extends React.Component {
    render() {
        return <MyPosts posts={this.props.posts}
                        newPostText={this.props.newPostText}
                        addPost={this.props.addPost}
                        updateNewPostText={this.props.updateNewPostText}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        removePost: () => {
            dispatch(updateNewPostTextActionCreator(''));
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}*/

export default connect(mapStateToProps, {updateNewPostText, addPost})(MyPostsContainer);
