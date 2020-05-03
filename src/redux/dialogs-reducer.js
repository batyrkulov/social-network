const ADD_MESSAGE= 'ADD-MESSAGE';

let initialState = {
    persons: [
        {id: 1, name: "John"},
        {id: 2, name: "Don"}
    ],
    messages: [
        {id: 1, text: "Hi"},
        {id: 2, text: "Yo"}
    ]
}

const dialogsReducer = (state=initialState, action)=> {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 3, text: action.newMessageText}],
                newMessageText: ''
            }
        }
        default:
            return state;
    }
}

export const addMessageAC = newMessageText=> ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;