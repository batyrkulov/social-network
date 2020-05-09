import React, {useEffect, useState} from "react";
import d from './Dialogs.module.css';
import Person from "./Person/Person";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/Form/Textarea";
import {maxLenCreator, required} from "../../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let personsElement = state.persons.map(person => <Person id={person.id} key={person.id} name={person.name} />);
    let messagesElement = state.messages.map(message => <Message id={message.id} key={message.id} text={message.text}/>);

    let onSendMessageClick = data=> {
        props.addMessage(data.newMessageText);
    }

    return (
        <div className={d.dialog}>
            <div className={d.persons}>
                {personsElement}
            </div>
            <div className={d.messages}>
                <div>{messagesElement}</div>
                <div>
                    <AddMessageReduxForm onSubmit={onSendMessageClick} />
                </div>
            </div>
        </div>
    );
}

const maxLen100 = maxLenCreator(100);
const AddMessageReduxForm = reduxForm({form: 'addMessgeForm'})(props=> {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={`newMessageText`} validate={[required, maxLen100]} placeholder={`Type here`}/>
        <div>
            <button>Send</button>
        </div>
    </form>
});
export default Dialogs;