import React from 'react';
import a from './Account.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Account = () => {
    return (
        <div className={a.account}>
            account
            <MyPostsContainer />
        </div>
    );
}

export default Account;