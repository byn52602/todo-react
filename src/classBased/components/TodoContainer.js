import React from 'react';
import { v4 as uuidv4 } from "uuid";
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
    state = {
        todos: []
    };
    // Bind with render syntax, see render()
    handleChange(id) {
        // this.setState(prevState => ({ return {....}}) works too.
        // This is using a call back in setState:
        // We are now using the snapshot (prevState) within the setState() 
        //  to get the previous state instead of using this.state
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    // This line below works under NON-STRICT-MODE ONLY
                    // todo.completed = !todo.completed

                    // This solution works under STRICT MODE
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }));
    };

    // Normal class properties syntax
    deleteTodo = (id) => {
        this.setState({
            // todos: [
            //     ...this.state.todos.filter(todo => {
            //         return todo.id !== id;
            //     })
            // ]
            todos: this.state.todos.filter(todo => {
                return todo.id !== id;
            })
        });
    };
    addTodoItem = todo => {
        const newTodo = {
            id: uuidv4(),
            title: todo.title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    updateTodo = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: updatedTitle
                    }
                    // todo.title = updatedTitle
                }
                return todo;
            }),
        });
    };
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    };
    render() {
        return (
            <div className='container'>
                <div className='inner'>
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange.bind(this)}
                        deleteTodoProps={this.deleteTodo}
                        updateTodoProps={this.updateTodo}
                    />
                </div>
            </div>
        );
    }
}

export default TodoContainer;