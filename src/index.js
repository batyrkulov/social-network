import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe, addPost, updateNewPost} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(state);

subscribe(reRenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
