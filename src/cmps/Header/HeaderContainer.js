import {connect} from 'react-redux';
import HeaderContainerAPI from "./HeaderContainerAPI";
import {logout} from "../../redux/auth-reducer";

let mapStateToProps = state=> {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainerAPI);
