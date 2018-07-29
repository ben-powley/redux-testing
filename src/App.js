import React, { Component } from "react";
import { connect } from "react-redux";
import store from "./store";
import { AddTodo } from "./store/actions";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            newTodoText: ""
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                ...this.state,
                todos: store.getState().todos
            });
        });
    }

    addTodo() {
        this.props.dispatch({ type: AddTodo, text: this.state.newTodoText });
        console.log(store.getState().todos);
    }

    onTodoTextChange(event) {
        this.setState({
            ...this.state,
            newTodoText: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <div>{this.state.todos.map(todo => <p key={todo.text}>{todo.text}</p>)}</div>
                <br />
                <input onChange={this.onTodoTextChange.bind(this)} />
                <button onClick={this.addTodo.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

App = connect()(App);

export default App;
