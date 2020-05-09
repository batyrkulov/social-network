import {getAuthUserData} from "./auth-reducer";

const  SET_INIT = 'SET_INIT';

const initialState = {
    inited: false
}

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                inited: action.payload
            }
        default:
            return state;
    }
}

export const setInit = bool=> ({type: SET_INIT, payload: bool});

export const initApp =  ()=> dispatch=> {
    let promis = dispatch(getAuthUserData());
    promis.then(
        ()=>{
            dispatch(setInit(true));
        }
    );
}

export default appReducer;