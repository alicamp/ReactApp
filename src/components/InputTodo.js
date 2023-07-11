import React, { Component } from "react"


class InputTodo extends React.Component {
    state = {
        title: ""
    }

    onChange = e => {
        //console.log(e.target.value);
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.title);
    };

    handleSubmit = e => {
        e.preventDefault();
        // this.props.addTodoProps(this.state.title);
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    name="title"
                    className="input-text"
                    placeholder="input todo"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" className="input-submit" value="submit" />
            </form>
        )
    }
}


export default InputTodo;