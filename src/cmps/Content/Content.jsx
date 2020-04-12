import React from 'react';
import c from './Content.module.css';
import {Route} from 'react-router-dom';
import Account from "./Account/Account";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
    return (
        <div className={c.con}>
            <Route  path='/account' render={()=><Account />} />
            <Route  path='/dialogs' render={()=><DialogsContainer />} />
            <Route  path='/users' render={()=><UsersContainer />} />
        </div>
    );
}

export default Content;