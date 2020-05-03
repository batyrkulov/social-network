import {combineReducers, createStore, applyMiddleware} from "redux";
import accountReducer from "./account-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    usersPage: usersReducer,
    accountPage: accountReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;