import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = state=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        addMessage: ()=> {
            dispatch(addMessageAC());
        },
        updateNewMessageText: (text)=>{
            dispatch(updateNewMessageTextAC(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;