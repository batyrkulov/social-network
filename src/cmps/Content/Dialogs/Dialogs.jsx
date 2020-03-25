import React from "react";
import d from './Dialogs.module.css';
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let personsData = [
        {id: 1, name: "John"},
        {id: 2, name: "Don"}
    ];

    let personsElement = personsData.map(person => <Person id={person.id} name={person.name} />);

    return (
        <div className={d.dialog}>
            <div className={d.persons}>
                {personsElement}
            </div>
            <div className={d.messages}>
                <Message text='Yo'/>
                <Message text='hi'/>
                <Message text='How are you?'/>
            </div>
        </div>
    );
}

export default Dialogs;