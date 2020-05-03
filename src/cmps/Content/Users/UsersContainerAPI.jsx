import React from 'react';
import Users from "./Users";
import Preloader from '../../Common/Preloader/Preloader';

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize);

        /*this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });*/
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}


export default UsersContainerAPI;