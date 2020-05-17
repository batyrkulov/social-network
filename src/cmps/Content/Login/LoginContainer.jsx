import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Common/Form/Input";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css';
import {selectCaptchaUrl} from "../../../redux/selectors/auth-selectors";

let LoginForm = ({handleSubmit, error, captchaUrl})=>{
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

        {captchaUrl && <div>
            <div><img src={captchaUrl}/></div>
            <div><Field placeholder='Enter here' name={`captcha`} component={Input} validate={[required]} /></div>
        </div>}

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
        props.login(formData.email, formData.password, formData.remember, formData.captcha);
    }

    return <div>
        <strong>Login page</strong>
        <LoginReduxForm onSubmit={onSubmitLoginForm} captchaUrl={props.captchaUrl}/>
    </div>
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    captchaUrl: selectCaptchaUrl(state)
});

export  default  connect(mapStateToProps, {login})(Login);