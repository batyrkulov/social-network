import React from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

let withAuthRedirect = Component=> {
    let RedirectCmp = props => {
        if (!props.isAuth)
            return <Redirect to={`/login`} />
        else
            return <Component {...props}/>
    }

    let mapStateToProps =state=> ({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToProps)(RedirectCmp);
}

export default withAuthRedirect;