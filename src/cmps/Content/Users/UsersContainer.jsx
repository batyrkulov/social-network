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

let mapStateToProps = state=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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