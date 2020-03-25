import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className={n.item} >
                <NavLink to='/account' activeClassName={n.activeLink}>Account</NavLink>
            </div>
            <div className={n.item} >
                <NavLink to='/dialogs' activeClassName={n.activeLink}>Dialogs</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;