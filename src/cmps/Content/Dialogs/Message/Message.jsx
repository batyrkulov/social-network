import React from "react";
import m from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            {props.text}
        </div>
    );
}

export default Message;