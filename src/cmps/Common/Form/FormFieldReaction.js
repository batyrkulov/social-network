import React from "react";
import style from './FormFieldReaction.module.css'

export const FormFieldReaction = props => {
    let hasError = props.meta.touched && props.meta.error;

    return <div className={style.formField+ ' '+(hasError ? style.error : '')}>
        <div>
            {props.children}
        </div>
        {hasError && <div className={style.errorMessage}>{props.meta.error}</div>}
    </div>
}