import { ADD_TODO } from "../actionTypes";

const addTodo = (id, title) => ({
    type: ADD_TODO,
    id,
    title
});

export default addTodo;
