import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
