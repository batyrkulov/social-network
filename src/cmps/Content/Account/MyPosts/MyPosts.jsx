import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount} />);
    let textareaRef = React.createRef();

    let addPost = ()=> {
        props.addPost();
    }

    let onNewPostChange = ()=> {
        let newPostValue = textareaRef.current.value;
        props.updateNewPost(newPostValue);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textareaRef} value={props.newPost} onChange={onNewPostChange} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;