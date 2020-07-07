import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, ButtonGroup, Checkbox, IconButton} from "@material-ui/core";
import {AddBox, Delete} from "@material-ui/icons";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export function Todolist(props: PropsType) {
    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const deleteTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title);
    }

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    return <div>
        <h3>
            <EditableSpan value={props.title} onChange={changeTodolistTitle}/>
            <IconButton onClick={deleteTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (newValue: string) => {
                        props.changeTaskTitle(t.id, newValue, props.id);
                    }


                    return (
                        <div key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                color={"primary"}
                                checked={t.isDone}
                                onChange={onChangeHandler}
                            />
                            <EditableSpan value={t.title} onChange={onTitleChangeHandler}/>
                            <IconButton onClick={onClickHandler} color={"secondary"}>
                                <Delete />
                            </IconButton>
                        </div>
                    )
                })
            }
        </ul>
        <div>
            <Button
                onClick={onAllClickHandler}
                color={props.filter === "all" ? "secondary" : "primary"}
                variant={"outlined"}
            >All</Button>
            <Button
                onClick={onActiveClickHandler}
                color={props.filter === "active" ? "secondary" : "primary"}
                variant={"outlined"}
            >Active
            </Button>
            <Button
                onClick={onCompletedClickHandler}
                color={props.filter === "completed" ? "secondary" : "primary"}
                variant={"outlined"}
            >Completed
            </Button>
        </div>
    </div>
}


