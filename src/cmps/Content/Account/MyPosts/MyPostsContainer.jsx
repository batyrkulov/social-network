import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/account-reducer";
import {connect} from 'react-redux';
import MyPosts from "./MyPosts";

let mapStateToProps = state=> {
    return {
        posts: state.accountPage.posts,
        newPostText: state.accountPage.newPostText
    }
}
let mapDispatchToProps = dispatch=> {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text));
        },
        addPost: ()=> {
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;