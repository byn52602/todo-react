import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {

    // const [todos, setTodos] = useState([]);
    const [todos, setTodos] = useState(getInitialTodos)

    const handleChange = id => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    };
    const deleteTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    };

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    };

    const updateTodo = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    };

    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }


    //By default, this effect run after every completed render. 
    //That is, on the first render and after every state or prop changes.
    //Should in case you are using any of the component value (like props, state or even functions) in the effect, 
    //you must add them as dependencies in the array.
    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        // console.log("set item temp:", temp)
    }, [todos]);

    // BUG: THIS SHOULD WORK JUST LIKE THE FUNCTION ABOVE!!! WHY???
    // UPDATE: DOES NOT WORK WITH NEW REACT https://ibaslogic.com/react-hooks-tutorial/ (see "asmello"'s comment)
    // useEffect(() => {
    //     console.log("test run")

    //     // getting stored items
    //     // const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(localStorage.getItem("todos"))

    //     if (Array.isArray(loadedTodos) && loadedTodos.length > 0) {
    //         console.log(loadedTodos)
    //         setTodos(loadedTodos)
    //     }
    // }, []);

    return (
        <div className='container'>
            <div className='inner'>
                <Header />
                <InputTodo addTodoProps={addTodoItem} />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={deleteTodo}
                    updateTodoProps={updateTodo}
                />
            </div>
        </div>
    );

}

export default TodoContainer;