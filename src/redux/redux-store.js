import {combineReducers, createStore} from "redux";
import accountReducer from "./account-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    usersPage: usersReducer,
    accountPage: accountReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);
window.store = store;

export default store;