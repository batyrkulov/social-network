import React from 'react';
import {connect} from 'react-redux';
import UsersContainerAPI from "./UsersContainerAPI";
import {
    toggleFollow,
    toggleFollowingInProgress,
    getUsers
} from "../../../redux/users-reducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersReselect
} from "../../../redux/selectors/users-selectors";

let mapStateToProps = state=> {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*let mapDispatchToProps = dispatch=> {
    return {
        follow: userId=> {
            dispatch(followAC(userId));
        },
        unfollow: userId=> {
            dispatch(unfollowAC(userId));
        },
        setUsers: users=> {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: page=> {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: count=>{
            dispatch(setTotalUsersCountAC(count));
        },
        toggleIsFetching: isFetching=>{
            dispatch(toggleIsFetching(isFetching));
        }
    }
}*/
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {toggleFollow, toggleFollowingInProgress, getUsers})
)(UsersContainerAPI);