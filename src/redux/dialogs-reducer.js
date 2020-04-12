const ADD_MESSAGE= 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT= 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    persons: [
        {id: 1, name: "John"},
        {id: 2, name: "Don"}
    ],
    messages: [
        {id: 1, text: "Hi"},
        {id: 2, text: "Yo"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state=initialState, action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            }
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 3, text: state.newMessageText}],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export const addMessageAC = ()=> ({type: ADD_MESSAGE});
export const updateNewMessageTextAC = (text)=> ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default dialogsReducer;