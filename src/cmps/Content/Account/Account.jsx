import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import a from './Account.module.css'

const Account = () => {
    return (
        <div className={a.account}>
            account
            <MyPosts/>
        </div>
    );
}

export default Account;