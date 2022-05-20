let initialState = {
    friendsList: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}
    ]
}

export const sidebarReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
    return state;
}