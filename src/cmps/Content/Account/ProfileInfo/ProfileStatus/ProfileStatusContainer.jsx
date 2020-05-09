import React from 'react';
import {connect} from "react-redux";
import {getStatus, updateStatus} from "../../../../../redux/account-reducer";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';

class ProfileStatusContainer extends React.Component {
    state = {
        editMode: false,
        statusNewText: this.props.status
    }

    componentDidMount() {
        let userId = this.props.match.params.userId || 7204;
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status!==this.props.status)
            this.setState({statusNewText: this.props.status});
    }

    onToggleEditMode = () => {
        if (this.state.editMode) {
            this.props.updateStatus(this.state.statusNewText);
        }
        this.setState({editMode: !this.state.editMode});
    }

    onStatusChange = (e) => {
        this.setState({statusNewText: e.currentTarget.value});
    }


    render = ()=> {
        return <div>
            { this.state.editMode ?
                <input onChange={this.onStatusChange} onBlur={this.onToggleEditMode} autoFocus={true} value={this.state.statusNewText}/>
                :
                <span onDoubleClick={this.onToggleEditMode} >{this.props.status || `----`}</span>
            }
        </div>
    }

}

export default compose(
    withRouter,
    connect(state=>({status: state.accountPage.status}), {getStatus, updateStatus})
)(ProfileStatusContainer);