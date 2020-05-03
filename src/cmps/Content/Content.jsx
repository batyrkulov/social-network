import React from 'react';
import c from './Content.module.css';
import {Route} from 'react-router-dom';
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import AccountContainer from "./Account/AccountContainer";
import LoginContainer from './Login/LoginContainer';

const Content = () => {
    return (
        <div className={c.con}>
            <Route  path='/account/:userId?' render={()=><AccountContainer />} />
            <Route  path='/dialogs' render={()=><DialogsContainer />} />
            <Route  path='/users' render={()=><UsersContainer />} />
            <Route  path='/login' render={()=><LoginContainer />} />
        </div>
    );
}

export default Content;