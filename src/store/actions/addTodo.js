const addTodo = (id, text) => {
    return {
        type: "ADD_TODO",
        text,
        id
    };
};

export default addTodo;
