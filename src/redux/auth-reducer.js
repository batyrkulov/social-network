import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null
}

const authReducer = (state=initialState, action)=> {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, emial)=> ({type: SET_USER_DATA, data: {userId, login, emial}});
export const getAuthUserData = ()=> dispatch=> {
    authAPI.isAuth().then(data=> {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email));
        }
    });
}

export default authReducer;