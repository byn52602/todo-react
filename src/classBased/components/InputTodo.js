import React, { Component } from 'react';
class InputTodo extends Component {
    state = {
        title: ""
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write something! Do not submit an empty Todo item!")
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form-container'>
                <input
                    type="text"
                    placeholder='Add Todo...'
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    className='input-text'
                />
                <button className='input-submit'>Submit</button>
            </form>
        );
    }
}

export default InputTodo;