import React from 'react';
import {connect} from 'react-redux';
import AccountContainerAPI from "./AccountContainerAPI";
import {getProfile} from "../../../redux/account-reducer";
import {withRouter} from 'react-router-dom';
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = state=> {
    return {
        profile: state.accountPage.profile
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getProfile}),
    withRouter
)(AccountContainerAPI);

/*let WithUrlData = withRouter(AccountContainerAPI);

export default withAuthRedirect(connect(mapStateToProps, {getProfile})(WithUrlData));*/