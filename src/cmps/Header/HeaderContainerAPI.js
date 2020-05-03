import React from "react";
import Header from "./Header";

class HeaderContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                />
    }

}

export default HeaderContainerAPI;
