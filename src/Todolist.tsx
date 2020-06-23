import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilerValuesType} from "./App";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListID: string) => void
    changeFilter: (id: string, value: FilerValuesType) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskId:string, isDone: boolean, todoListID: string) => void
    filter: FilerValuesType
    removeTodoList: (id: string) => void
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            props.addTask(newTaskTitle, props.id) ;
            setNewTaskTitle("");
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== ""){
            props.addTask(newTaskTitle.trim(), props.id);
            setNewTaskTitle("")
        } else {
            setError("Поле обязательно для заполнения");
        }
    }
    const onAllClickHandler = () => props.changeFilter(props.id,"all")
    const onActiveClickHandler = () => props.changeFilter(props.id,"active")
    const onCompletedClickHandler = () => props.changeFilter(props.id,"completed")

    const deleteTodoList = () => props.removeTodoList(props.id)

    return (
        <div>
            <h3> {props.title}<button onClick={deleteTodoList}>x</button></h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {props.tasks.map((t) => {

                    const onRemoveHandler = () => {props.removeTask(t.id, props.id)}

                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked,props.id);
                    }

                    return (
                        <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input
                                type="checkbox"
                                onChange={onChangeHandler}
                                checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ onRemoveHandler }>x
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                        onClick={ onAllClickHandler }>All</button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                        onClick={ onActiveClickHandler }>Active</button>
                <button className={props.filter === "completed" ? "active-filter" : ""}
                        onClick={ onCompletedClickHandler }>Completed</button>
            </div>
        </div>
    )
}

