import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null,
    captchaUrl: null
}

const authReducer = (state=initialState, action)=> {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, emial, isAuth)=> ({type: SET_USER_DATA, payload: {userId, login, emial, isAuth}});
export const setCaptchaUrl = captchaUrl=> ({type: SET_CAPTCHA_URL, payload: {captchaUrl}});

export const getAuthUserData = ()=> async dispatch=> {
    let data =  await authAPI.isAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email, password, remember, captcha) => async dispatch=> {
    let data =  await authAPI.login(email, password, remember, captcha);
    if (data.resultCode===0) {
        dispatch(setCaptchaUrl(null));
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode===10) {
            dispatch(getCaptchaUrl());
        }

        let error = data.messages.length>0 ? data.messages[0] : 'Unknown auth error';
        dispatch(stopSubmit('login', {_error: error}));
    }
}

export const logout = () => async dispatch=> {
    let bool = await authAPI.logout()
    if (bool)
        dispatch(setAuthUserData(null, null, null, false));
    else alert('lou Out error');
}

export const getCaptchaUrl = ()=> async dispatch => {
    let url = await securityAPI.getCaptchaUrl();
    if (url)
        dispatch(setCaptchaUrl(url));
}

export default authReducer;