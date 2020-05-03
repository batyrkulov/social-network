import {connect} from 'react-redux';
import HeaderContainerAPI from "./HeaderContainerAPI";
import {getAuthUserData} from "../../redux/auth-reducer";

let mapStateToProps = state=> {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainerAPI);
