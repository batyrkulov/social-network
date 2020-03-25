import React from "react";
import p from './Person.module.css';
import {NavLink} from 'react-router-dom';

const Person = (props) => {
    return (
        <div>
            <NavLink to={'/dialogs/'+props.id} activeClassName={p.activeLink}>{props.name}</NavLink>
        </div>
    );
}

export default Person;