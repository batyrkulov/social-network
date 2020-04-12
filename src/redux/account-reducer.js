const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: "first post", likesCount: 45},
        {id: 2, text: "second post", likesCount: 21},
    ],
    newPostText: ''
}

const accountReducer = (state=initialState, action)=> {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, text: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state;
    }
}

export const addPostAC = ()=> ({type: ADD_POST});
export const updateNewPostTextAC = (text)=> ({type: UPDATE_NEW_POST_TEXT, text: text});

export default accountReducer;