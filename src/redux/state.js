let reRenderEntireTree;

let state = {
    accountPage: {
        posts: [
            {id: 1, text: "first post", likesCount: 45},
            {id: 2, text: "second post", likesCount: 21},
        ],
        newPost: ''
    },
    dialogsPage: {
        persons: [
            {id: 1, name: "John"},
            {id: 2, name: "Don"}
        ],
        messages: [
            {id: 1, text: "Hi"},
            {id: 2, text: "Yo"}
        ]
    }
}

export const addPost = ()=> {
    state.accountPage.posts.push({id: 3, text: state.accountPage.newPost, likesCount: 0});
    state.accountPage.newPost = '';
    reRenderEntireTree(state);
}

export const updateNewPost = (text) => {
    state.accountPage.newPost = text;
    reRenderEntireTree(state);
}

export const subscribe = (observer)=> {
    reRenderEntireTree = observer;
}

export default state;