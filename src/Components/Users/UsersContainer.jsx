import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    onPageChanged,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChangedSuccess = (pageNumber) => {
        this.props.onPageChanged(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           onPageChanged={this.onPageChangedSuccess}
                                                           users={this.props.users}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}
                                                           followingInProgress = {this.props.followingInProgress}
            />}

        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
let withRedirect = withAuthRedirect(UsersContainer)
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers, onPageChanged}))(UsersContainer)
