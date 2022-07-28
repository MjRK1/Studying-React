import React from 'react'
import Friends from "./Friends";
import Preloader from "../common/preloader/Preloader";
import {
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {getFollowedUsers, onFriendsPageChanged, unfollowFriend} from "../../redux/friends-reducer";


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFollowedUsers();
    }

    onFriendsPageChangedSuccess = (pageNumber) => {
        this.props.onFriendsPageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Friends followedUsersCount={this.props.followedUsersCount}
                                                                 pageSize={this.props.pageSize}
                                                                 currentPage={this.props.currentPage}
                                                                 onFriendsPageChanged={this.onFriendsPageChangedSuccess}
                                                                 followedUsers={this.props.followedUsers}
                                                                 follow={this.props.follow}
                                                                 unfollow={this.props.unfollow}
                                                                 unfollowFriend={this.props.unfollowFriend}
                                                                 followingInProgress={this.props.followingInProgress}
                />}

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        followedUsers: state.friendsPage.followedUsers,
        followedUsersCount: state.friendsPage.followedUsersCount,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, unfollowFriend, setCurrentPage, toggleFollowingProgress,
    getFollowedUsers, onFriendsPageChanged
})(FriendsContainer);