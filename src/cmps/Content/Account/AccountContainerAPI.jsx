import React from 'react';
import Account from "./Account";

class AccountContainerAPI extends React.Component {

    updateProfileData() {
        let userId = this.props.match.params.userId || 7204;
        this.props.getProfile(userId);
    }

    componentDidMount() {
        this.updateProfileData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId!==this.props.match.params.userId)
            this.updateProfileData();
    }

    render() {
        return <Account {...this.props} isOwner={!this.props.match.params.userId} />
    }
}

export default AccountContainerAPI;