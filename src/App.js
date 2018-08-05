import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./store/actions";

let todoId = 1;

class App extends Component {
    state = {};

    constructor(props) {
        super(props);

        this.onAddTodoClick = this.onAddTodoClick.bind(this);
    }

    onAddTodoClick() {
        this.props.addTodo(todoId++, `Hello World - ${todoId}`);
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <button onClick={this.onAddTodoClick}>Add todo</button>
                {this.props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: (id, title) => dispatch(addTodo(id, title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
