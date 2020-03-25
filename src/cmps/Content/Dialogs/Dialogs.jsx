import React from "react";
import d from './Dialogs.module.css';
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={d.dialog}>
            <div className={d.persons}>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
                <Person/>
            </div>
            <div className={d.messages}>
                <Message/>
                <Message/>
                <Message/>
            </div>
        </div>
    );
}

export default Dialogs;