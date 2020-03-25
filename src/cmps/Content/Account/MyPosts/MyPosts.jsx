import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <Post text='post 1'/>
            <Post text='post 2'/>
            <Post text='post 3'/>
        </div>
    );
}

export default MyPosts;