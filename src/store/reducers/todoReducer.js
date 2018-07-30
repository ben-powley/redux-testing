const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            };

        case "TOGGLE_TODO":
            const todos = state.todos.map(todo => ({
                ...todo,
                completed: todo.id === action.id ? !todo.completed : todo.completed
            }));

            return {
                todos: [...todos]
            };

        default:
            return state;
    }
};

export default todoReducer;
