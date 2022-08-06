import {authAPI, profileAPI} from "../api/api";
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
                ...action.payload,
                isAuth: action.payload.isAuth
            };
        case GET_USER_AVATAR:
            return {
                ...state, ...action.image
            }
        default:
            return state;
    }
}

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getAuthUserAvatarSuccess = (image) => ({type: GET_USER_AVATAR, image})
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserDataSuccess(id, email, login, true));
                profileAPI.getUserProfile(id)
                    .then(data => {
                        dispatch(getAuthUserAvatarSuccess(data.photos.small));
                        dispatch(setUserProfile(data, true));
                    });
            }
        });
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataSuccess(null, null, null, false))
            }
        });
    }
}

export default authReducer;