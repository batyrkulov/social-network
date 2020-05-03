import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../Common/Form/Textarea";
import {maxLenCreator, required} from "../../../../utils/validators/validators";
 
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post id={post.id} key={post.id} text={post.text} likesCount={post.likesCount} />);

    let onAddPostClick = data=> {
        props.addPost(data.newPostText);
    }

    return (
        <div>
            My Posts
            <AddPostReduxForm onSubmit={onAddPostClick} />
            {postsElements}
        </div>
    );
}

const maxLen50 = maxLenCreator(50);
const AddPostForm = props=> {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name='newPostText' validate={[required, maxLen50]} placeholder={`Type here`} />
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm);

export default MyPosts;