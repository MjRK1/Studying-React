import {authAPI, profileAPI} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {getAuthUserData} from "./auth-reducer";
const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';

let initialState = {
    initialized: false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZING_SUCCESS})
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData());
   promise.then(() => {
       dispatch(initializedSuccess());
   })
}

export default appReducer;