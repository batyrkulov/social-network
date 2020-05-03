import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/Form/Input";
import {required} from "../../../utils/validators/validators";

let LoginForm = props=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={`Login`} name={`login`} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={`Password`} name={`password`}  component={Input} validate={[required]}/>
        </div>
        <div>
            <Field component={`input`} type={`checkbox`}/> Remember me
        </div>

        <div>
            <button>Login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let Login = ()=> {
    let onSubmitLoginForm = formData => {
        alert(formData);
    }

    return <div>
        <strong>Login page</strong>
        <LoginReduxForm onSubmit={onSubmitLoginForm}/>
    </div>
}

export  default  Login;