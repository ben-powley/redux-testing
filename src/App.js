import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
    state = {};

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                {this.props.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
