import React from 'react';
import a from './Account.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Account = props => {
    return (
        <div className={a.account}>
            <ProfileInfo isOwner={props.isOwner} updatePhoto={props.updatePhoto} profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}

export default Account;