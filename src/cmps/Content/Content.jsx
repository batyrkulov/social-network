import React from 'react';
import c from './Content.module.css';
import {Route} from 'react-router-dom';
import Account from "./Account/Account";
import Dialogs from "./Dialogs/Dialogs";

const Content = () => {
    return (
        <div className={c.con}>
            <Route exact path='/account' component={Account} />
            <Route exact path='/dialogs' component={Dialogs} />
        </div>
    );
}

export default Content;