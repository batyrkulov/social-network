import React from 'react';

const Post = (props) => {
    return (
        <div>
            {props.text} | {props.likesCount}
        </div>
    );
}

export default Post;