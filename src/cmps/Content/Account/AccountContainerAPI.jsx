import React from 'react';
import Account from "./Account";

class AccountContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 7204;
        this.props.getProfile(userId);
    }

    render() {
        return <Account {...this.props}/>
    }
}


export default AccountContainerAPI;