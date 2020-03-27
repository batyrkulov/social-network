import React from "react";
import d from './Dialogs.module.css';
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let personsElement = props.state.persons.map(person => <Person id={person.id} name={person.name} />);
    let messagesElement = props.state.messages.map(message => <Message id={message.id} text={message.text}/>);

    return (
        <div className={d.dialog}>
            <div className={d.persons}>
                {personsElement}
            </div>
            <div className={d.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;