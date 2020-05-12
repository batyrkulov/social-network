import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/Form/Input";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';

let LoginForm = ({handleSubmit, error})=>{
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={`Email`} name={`email`} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={`Password`} name={`password`}  component={Input} validate={[required]} type={`password`}/>
        </div>
        <div>
            <Field component={`input`} type={`checkbox`} name={`remember`}/> Remember me
        </div>

        { error &&
            <div className={style.formGlobalError}>
                {error}
            </div>
        }

        <div>
            <button>Login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let Login = props=> {
    if (props.isAuth) return <Redirect to={`/account`} />

    let onSubmitLoginForm = formData => {
        props.login(formData.email, formData.password, formData.remember);
    }

    return <div>
        <strong>Login page</strong>
        <LoginReduxForm onSubmit={onSubmitLoginForm}/>
    </div>
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth
});

export  default  connect(mapStateToProps, {login})(Login);