import React, { Component } from "react";
import { connect } from "react-redux";
import { AddTodo, ToggleTodo } from "./store/actions";

let todoId = 0;

class App extends Component {
    state = {
        newTodoText: ""
    };

    addTodo() {
        this.props.addTodo(todoId++, this.state.newTodoText);

        this.setState({
            newTodoText: ""
        });
    }

    onTodoTextChange(event) {
        this.setState({
            newTodoText: event.target.value
        });
    }

    onKeyPress(event) {
        if (event.key === "Enter") {
            this.addTodo();
        }
    }

    toggleTodo(id, event) {
        this.props.toggleTodo(id);
        console.log(this.props);
    }

    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <input onChange={this.onTodoTextChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} value={this.state.newTodoText} />
                <br />
                <div>
                    {this.props.todos.map(todo => (
                        <p className={todo.completed ? "completed" : ""} onClick={e => this.toggleTodo(todo.id, e)} key={todo.id}>
                            {todo.text}
                        </p>
                    ))}
                </div>
                <br />
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: (id, text) => dispatch(AddTodo(id, text)),
    toggleTodo: id => dispatch(ToggleTodo(id))
});

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
