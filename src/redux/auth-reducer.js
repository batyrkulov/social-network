import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, emial, isAuth)=> ({type: SET_USER_DATA, payload: {userId, login, emial, isAuth}});
export const getAuthUserData = ()=> dispatch=> {
    return  authAPI.isAuth().then(data=> {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
}

export const login = (email, password, remember) => dispatch=> {
    authAPI.login(email, password, remember)
        .then(data=> {
            if (data.resultCode===0) {
                dispatch(getAuthUserData());
            } else {
                let error = data.messages.length>0 ? data.messages[0] : 'Unknown auth error';
                dispatch(stopSubmit('login', {_error: error}));
            }
        });
}

export const logout = () => dispatch=> {
    authAPI.logout()
        .then(bool=>{
            if (bool)
                dispatch(setAuthUserData(null, null, null, false));
            else alert('lou Out error');
        });
}

export default authReducer;