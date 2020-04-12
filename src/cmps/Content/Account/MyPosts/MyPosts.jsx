import React from 'react';
import Post from "./Post/Post";
 
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} key={post.id} text={post.text} likesCount={post.likesCount} />);
    let textareaRef = React.createRef();

    let onAddPostClick = ()=> {
        props.addPost();
    }

    let onNewPostChange = ()=> {
        let newPostValue = textareaRef.current.value;
        props.updateNewPostText(newPostValue);
    }

    return (
        <div>
            My Posts
            <div>
                <textarea ref={textareaRef} value={props.newPostText} onChange={onNewPostChange} />
            </div>
            <div>
                <button onClick={onAddPostClick}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;