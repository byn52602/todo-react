import React from 'react';
import TodoItem from './TodoItem';
class TodosList extends React.Component {
    state = {}
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        updateTodoProps={this.props.updateTodoProps}
                    />
                ))}
            </ul>
        );
    }
}

export default TodosList;