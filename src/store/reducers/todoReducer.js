const initialState = {
    todos: [
        {
            id: 1,
            title: "Hello World"
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default todoReducer;
