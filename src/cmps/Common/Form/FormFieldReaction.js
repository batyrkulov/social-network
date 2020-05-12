import React from "react";
import style from './FormFieldReaction.module.css'

export const FormFieldReaction = ({meta: {touched, error}, children}) => {
    let hasError = touched && error;

    return <div className={style.formField+ ' '+(hasError ? style.error : '')}>
        <div>
            {children}
        </div>
        {hasError && <div className={style.errorMessage}>{error}</div>}
    </div>
}