import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import a from './Account.module.css'

const Account = (props) => {
    return (
        <div className={a.account}>
            account
            <MyPosts posts={props.state.posts} addPost={props.addPost} newPost={props.state.newPost}   updateNewPost={props.updateNewPost}/>
        </div>
    );
}

export default Account;