import React, {useMemo, useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {v1} from "uuid";


export type TaskType = {
    id: string,
    isDone: boolean,
    title: string,
};

export type FilterValueType = "all" | "active" | "completed";

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), isDone: true, title: "JS"},
        {id: v1(), isDone: true, title: "React"},
        {id: v1(), isDone: false, title: "Redux"},
        {id: v1(), isDone: false, title: "RestAPI"},
        {id: v1(), isDone: false, title: "GraphQl"}
    ]);

    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: string) {
        let filteredTask = tasks.filter(t => t.id != id);
        setTasks(filteredTask)
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks]);
    }

    let tasksForTodoList = tasks;
    if (filter === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <Todolist title="Books"
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
            />
        </div>
    );
}

export default App;
