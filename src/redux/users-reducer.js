import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( user=> {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( user=> {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            let userIdExists =  state.followingInProgress.some(id=>id===action.userId);
            let newFollowingInProgress = [...state.followingInProgress];
            if (userIdExists) newFollowingInProgress =  newFollowingInProgress.filter(id=>id!==action.userId);
            else newFollowingInProgress.push(action.userId);
            return {...state, followingInProgress: newFollowingInProgress}
        }
        default:
            return state;
    }
}

export const follow = userId => ({type: FOLLOW, userId})
export const unfollow = userId => ({type: UNFOLLOW, userId})
export const setUsers = users=>({type: SET_USERS, users})
export const setCurrentPage = currentPage=>({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount=>({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = isFetching=>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = userId=>({type: TOGGLE_FOLLOWING_PROGRESS, userId})

export const getUsers = (page, pageSize)=> {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setCurrentPage(page));
            });
    }
}

export const toggleFollow = (userId, followBool)=> {
    return dispatch => {
        dispatch(toggleFollowingInProgress(userId));
        usersAPI.toggleFollowing(userId, followBool)
            .then(bool=>{
                dispatch(toggleFollowingInProgress(userId));
                if (bool) {
                    if (followBool) dispatch(follow(userId));
                    else dispatch(unfollow(userId));
                }
            });
    }
}

export default usersReducer;