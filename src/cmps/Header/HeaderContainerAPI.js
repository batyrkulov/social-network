import React from "react";
import Header from "./Header";

class HeaderContainerAPI extends React.Component {

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logout={this.props.logout}
                />
    }

}

export default HeaderContainerAPI;
