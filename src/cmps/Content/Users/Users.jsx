import React from 'react';
import style from './Users.module.css';
import {Paginator} from "../../Common/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return <div>

        <Paginator
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}
            currentPage={props.currentPage}
            portionSize={30}
        />

        {props.users.map(user =>
            <User
                key={user.id}
                user={user}
                toggleFollow={props.toggleFollow}
                followingInProgress={props.followingInProgress}
            />)
        }
    </div>
}

export default Users;