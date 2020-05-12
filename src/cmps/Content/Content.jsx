import React, {Suspense} from 'react';
import c from './Content.module.css';
import {Route} from 'react-router-dom';
import LoginContainer from './Login/LoginContainer';
import Preloader from "../Common/Preloader/Preloader";

const DialogsContainer = React.lazy(()=>import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(()=>import('./Users/UsersContainer'));
const AccountContainer = React.lazy(()=>import('./Account/AccountContainer'));

const Content = () => {
    return (
        <div className={c.con}>
            <Suspense fallback={<Preloader/>}>
                <Route  path='/account/:userId?' render={()=><AccountContainer />} />
                <Route  path='/dialogs' render={()=><DialogsContainer />} />
                <Route  path='/users' render={()=><UsersContainer />} />
            </Suspense>
            <Route  path='/login' render={()=><LoginContainer />} />
        </div>
    );
}

export default Content;