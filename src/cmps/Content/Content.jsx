import React from 'react';
import c from './Content.module.css';
import {Route} from 'react-router-dom';
import Account from "./Account/Account";
import Dialogs from "./Dialogs/Dialogs";

const Content = (props) => {
    return (
        <div className={c.con}>
            <Route  path='/account' render={()=><Account  state={props.state.accountPage} addPost={props.addPost}    updateNewPost={props.updateNewPost}/>} />
            <Route  path='/dialogs' render={()=><Dialogs state={props.state.dialogsPage} />} />
        </div>
    );
}

export default Content;