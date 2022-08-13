import React, { useState, useEffect } from 'react';
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
    const [editing, setEditing] = useState(false)


    const handleEditing = () => {
        setEditing(true)
    }
    const handleEnterKeydown = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }
    const imcompletedStyle = {
        color: "#0077b6",
    }
    const completedStyle = {
        fontStyle: "italic",
        color: "grey",
        opacity: 0.8,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.todo;
    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                    className={styles.checkbox}
                />
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{ color: "#dd1c1a", fontSize: "16px", background: "transparent" }} />
                </button>
                <span style={completed ? completedStyle : imcompletedStyle}>
                    {title}
                </span>
            </div>
            <input
                type="text"
                className={styles.textInput}
                style={editMode}
                value={title}
                onChange={e => {
                    props.updateTodoProps(e.target.value, id)
                }}
                onKeyDown={handleEnterKeydown}
            />
        </li>
    )
}

export default TodoItem;