import { ADD_TODO } from "../actions/actionTypes";

const initialState = {
    todos: [
        {
            id: 0,
            title: "Hello World",
            completed: false
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        title: action.title,
                        completed: false
                    }
                ]
            };
        default:
            return state;
    }
};

export default todoReducer;
