import {headerAPI, profileAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_USER_AVATAR = 'GET_USER_AVATAR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    image: null,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case GET_USER_AVATAR:
            return {
                ...state, ...action.image
            }
        default:
            return state;
    }
}

export const setAuthUserDataSucces = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserAvatarSucces = (image) => ({type: GET_USER_AVATAR, image})
export const getAuthUserData = (userId) => {
    return (dispatch) => {
        headerAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserDataSucces(id, email, login));
                profileAPI.getUserProfile(userId)
                    .then(data => {
                        dispatch(getAuthUserAvatarSucces(data.photos.small));
                        dispatch(setUserProfile(data));
                    });
            }
        });
    }
}

export default authReducer;