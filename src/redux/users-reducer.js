import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = 'USERS/TOGGLE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: action.follow}
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
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            let userIdExists = state.followingInProgress.some(id => id === action.userId);
            let newFollowingInProgress = [...state.followingInProgress];
            if (userIdExists) newFollowingInProgress = newFollowingInProgress.filter(id => id !== action.userId);
            else newFollowingInProgress.push(action.userId);
            return {...state, followingInProgress: newFollowingInProgress}
        }
        default:
            return state;
    }
}

export const toggleFollowAC = (userId, follow) => ({type: TOGGLE_FOLLOW, userId, follow})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = userId => ({type: TOGGLE_FOLLOWING_PROGRESS, userId})

export const getUsers = (page, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(page));
    }
}

export const toggleFollow = (userId, followBool) => {
    return async dispatch => {
        dispatch(toggleFollowingInProgress(userId));
        let bool = await usersAPI.toggleFollowing(userId, followBool);
        dispatch(toggleFollowingInProgress(userId));
        if (bool) {
            dispatch(toggleFollowAC(userId, followBool))
        }
    }
}

export default usersReducer;