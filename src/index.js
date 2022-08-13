import React from "react"
import { createRoot } from 'react-dom/client'
import TodoContainer from "./functionBased/components/TodoContainer"
import { HashRouter } from "react-router-dom"
import "./functionBased/app.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <HashRouter>
            <TodoContainer />
        </HashRouter>
    </React.StrictMode>
)