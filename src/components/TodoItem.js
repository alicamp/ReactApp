import React from "react"

class TodoItem extends React.Component {

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#d35e0f",
            opacity: 0.8,
            textDecoration: "line-through",
        }
        const { id, completed, title } = this.props.todo;

        return (
            <div>
                <li className="todo-item">
                    <input type="checkbox"
                        checked={completed}
                        onChange={() => this.props.handleChangeProps(id)} />
                    <button onClick={() => this.props.deleteTodoItem(id)}>
                        delete
                </button>
                    <span style={this.props.todo.completed ? completedStyle : null}>
                        {this.props.todo.title}
                    </span>
                </li>
            </div>
        )
    }
}

// export default TodoItem

// function TodoItem(props) {
//     return <li key={props.todo.id}> <input type="checkbox" checked={props.todo.completed} onChange={() => this.props.handleChangeProps()} /> {props.todo.id} - {props.todo.title} </li>
// }

export default TodoItem