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
                {this.props.posts.map((post, index) => (
                    <div key={index} className="blog-post">
                        <h2>{post.title}</h2>
                        <figure>
                            <img src={post.image} alt={post.title} />
                        </figure>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    addTodo: (id, title) => dispatch(addTodo(id, title))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
