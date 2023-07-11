import { Component } from "react";
import React from "react";
import TodoList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid"
class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    addTodoItem = title => {
        console.log(title);

        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    deleteTodo = (id) => {
        console.log("id: " + id);
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    render() {
        return (
            <div className="container">
                <h1>Hello from react app</h1>
                <p>I am a react Component</p>
                {/* <div>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}> {todo.id} - {todo.title} </li>

                    ))}
                </div> */}
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodoList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoItem={this.deleteTodo}
                />
            </div>
        )
    }
}

export default TodoContainer