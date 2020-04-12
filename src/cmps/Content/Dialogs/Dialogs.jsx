import React from "react";
import d from './Dialogs.module.css';
import Person from "./Person/Person";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let personsElement = state.persons.map(person => <Person id={person.id} key={person.id} name={person.name} />);
    let messagesElement = state.messages.map(message => <Message id={message.id} key={message.id} text={message.text}/>);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = ()=> {
        props.addMessage();
    }
    let onNewMessageChange = (e)=> {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={d.dialog}>
            <div className={d.persons}>
                {personsElement}
            </div>
            <div className={d.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={newMessageText} placeholder="Enter"/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;