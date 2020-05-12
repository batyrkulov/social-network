import {usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STAUTS';

let initialState = {
    posts: [
        {id: 1, text: "first post", likesCount: 45},
        {id: 2, text: "second post", likesCount: 21},
    ],
    profile: null,
    status: ''
}

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, text: action.newPostText, likesCount: 0}]
            }
        }
        case SET_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostAC = newPostText => ({type: ADD_POST, newPostText});
export const setProfile = profile => ({type: SET_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getProfile = userId => async dispatch => {
    let profile = await usersAPI.getProfile(userId);
    dispatch(setProfile(profile));
}

export const getStatus = userId => async dispatch => {
    let status = await usersAPI.getStatus(userId);
    dispatch(setStatus(status));
}

export const updateStatus = status => async dispatch => {
    let bool = await usersAPI.updateStatus(status);
    if (bool)
        dispatch(setStatus(status));
}

export default accountReducer;