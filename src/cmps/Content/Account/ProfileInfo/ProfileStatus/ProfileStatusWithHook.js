import React, {useEffect, useState} from 'react';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../../../../redux/account-reducer";

const ProfileStatusWithHook = props=> {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    useEffect(()=>{
        let userId = props.match.params.userId || 7204;
        props.getStatus(userId);
    }, []);

    const onToggleEditMode = () => {
        if (editMode) {
            props.updateStatus(status);
        }
        setEditMode(!editMode);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        { editMode ?
            <input onChange={onStatusChange} onBlur={onToggleEditMode} autoFocus={true} value={status}/>
            :
            <span onDoubleClick={onToggleEditMode} >{props.status || `----`}</span>
        }
    </div>
}

export default compose(
    withRouter,
    connect(state=>({status: state.accountPage.status}), {getStatus, updateStatus})
)(ProfileStatusWithHook);