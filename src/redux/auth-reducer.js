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

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserAvatar = (image) => ({type: GET_USER_AVATAR, image})
export default authReducer;