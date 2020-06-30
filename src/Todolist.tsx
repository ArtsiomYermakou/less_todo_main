import React, {ChangeEvent} from 'react';
import {FilterValueType, TaskType} from './App';
import AddItemForm from "./AddItemForm";
import EditableSpan from "./EditableSpan";

type PropsType = {
    id: string,
    title: string,
    filter: FilterValueType,
    tasks: Array<TaskType>,
    removeTask: (id: string, todoListID: string) => void,
    changeFilter: (id: string, value: FilterValueType) => void,
    addTask: (title: string, todoListID: string) => void,
    changeStatus: (id: string, isDone: boolean, todoListID: string) => void,
    removeTodoList: (id: string) => void,
    changeTaskTitle: (id: string, title: string, todoListID: string) => void
}

function TodoList(props: PropsType) {

    // let [title, setTitle] = useState<string>("");
    // let [error, setError] = useState<string|null>(null)

    let jsxTasks = props.tasks.map((t) => {

        const onStatusChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = event.currentTarget.checked;
            props.changeStatus(t.id, newIsDoneValue, props.id);
        }

        const onTitleChangeHandler = (newTitle: string) => {
            props.changeTaskTitle(t.id, newTitle, props.id)
        }
        console.dir()
        return (
            <li key={t.id} className={(props.filter === "all" && t.isDone) ? "is-done" : ""}>
                <input type="checkbox" checked={t.isDone} onChange={onStatusChangeHandler}/>
                <EditableSpan title={t.title} saveTitle={onTitleChangeHandler}/>
                <button onClick={() => {props.removeTask(t.id, props.id)}}>x</button>
            </li>
        )
    });

    // const onAddTaskClick = () => {
    //     if(title.trim() !== ""){
    //         props.addTask(title, props.id);
    //
    //     } else {
    //         setError("Title is required")
    //     }
    //     setTitle("");
    // }

    const onAllChangeFilter = () => props.changeFilter(props.id, "all")
    const onActiveChangeFilter = () => props.changeFilter(props.id, "active")
    const onCompletedChangeFilter = () => props.changeFilter(props.id, "completed")
    // const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setError(null);
    //     setTitle(e.currentTarget.value)
    // }
    // const onKeyPressAddTask = (e: KeyboardEvent) => {
    //     setError(null);
    //     if(e.charCode === 13){
    //         onAddTaskClick()
    //     }
    // }
    const createTaskTitle = (title: string) => {
        props.addTask(title, props.id);
    }
    const deleteTodoList = () => props.removeTodoList(props.id)
    const allBtnClass = props.filter === "all" ? "active-filter" : "";

    return (
        <div>
            <h3>{props.title}
                <button onClick={deleteTodoList}>x</button>
            </h3>
            <AddItemForm addItem={createTaskTitle}/>
            {/*<div>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        value={title}*/}
            {/*        onChange={onTitleChange}*/}
            {/*        onKeyPress={onKeyPressAddTask}*/}
            {/*        className={error ? "error" : ""}*/}
            {/*    />*/}
            {/*    <button onClick={onAddTaskClick}>add</button>*/}
            {/*    {error && <div className={"error-message"}>{error}</div>}*/}
            {/*</div>*/}
            <ul>
                {jsxTasks}
            </ul>
            <div>
                <button
                    className={allBtnClass}
                    onClick={onAllChangeFilter}>All
                </button>
                <button
                    className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveChangeFilter}>Active
                </button>
                <button
                    className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedChangeFilter}>Completed
                </button>
            </div>
        </div>
    );
}

export default TodoList;