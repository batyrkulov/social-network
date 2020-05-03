import React from 'react';
import {addPostAC} from "../../../../redux/account-reducer";
import {connect} from 'react-redux';
import MyPosts from "./MyPosts";

let mapStateToProps = state=> {
    return {
        posts: state.accountPage.posts
    }
}
let mapDispatchToProps = dispatch=> {
    return {
        addPost: newPostText=> {
            dispatch(addPostAC(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;