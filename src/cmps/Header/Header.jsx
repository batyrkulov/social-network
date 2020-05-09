import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header>
            {props.isAuth ? <div> {props.login}  - <button onClick={props.logout}>Logout</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </header>
    );
}

export default Header;