import React from "react";
import {addMessageAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = state=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        addMessage: newMessageText=> {
            dispatch(addMessageAC(newMessageText));
        }
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);