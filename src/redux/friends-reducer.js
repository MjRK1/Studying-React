import {usersAPI} from "../api/api";
import {setCurrentPage, setTotalUsersCount, toggleFollowingProgress, toggleIsFetching} from "./users-reducer";

const SET_FOLLOWED_USERS = 'SET_FOLLOWED_USERS';
const SET_FOLLOWED_USERS_COUNT = 'SET_FOLLOWED_USERS_COUNT';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    followedUsers: [],
    followedUsersCount: null,
};
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: state.followedUsers.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_FOLLOWED_USERS: {
            return {...state, followedUsers: action.followedUsers}
        }
        case SET_FOLLOWED_USERS_COUNT: {
            return {...state, followedUsersCount: action.followedUsersCount}
        }
        default:
            return state;
    }

}

export const setFollowedUsers = (followedUsers) => ({type: SET_FOLLOWED_USERS, followedUsers});
export const setFollowedUsersCount = (followedUsersCount) => ({type: SET_FOLLOWED_USERS_COUNT, followedUsersCount});
export const unfollowFriendSuccess = (userId) => ({type: UNFOLLOW, userId})


export const getFollowedUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getFollowedUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFollowedUsers(data.items));
            dispatch(setFollowedUsersCount(data.totalCount));
        });
    }
}
export const onFriendsPageChanged = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        usersAPI.getFollowedUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFollowedUsers(data.items));
        });
    }
}

export const unfollowFriend = (userId, pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowFriendSuccess(userId));
                usersAPI.getFollowedUsers(pageNumber, pageSize).then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setFollowedUsers(data.items));
                });
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default friendsReducer;