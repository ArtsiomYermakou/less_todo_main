import React, {ChangeEvent} from 'react';
import {filterValueType, TaskType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditTableSpan} from "./EditTableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";


type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todoListID: string) => void
    changeFilter: (id: string, value: filterValueType) => void
    addTask: (title: string, todoListID: string) => void
    changeStatus: (id: string, isDone: boolean, todoListID: string) => void
    filter: filterValueType
    removeTodoList: (id: string) => void
    changeTaskTitle: (id: string, title: string, todolistID: string) => void
    changeTodoListTitle: (id: string, NewTitle: string) => void
}

export function Todolist(props: PropsType) {

    let jsxTasks = props.tasks.map(t => {

        const onStatusChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let newIsDoneValue = e.currentTarget.checked
            props.changeStatus(t.id, newIsDoneValue, props.id);
        }

        const onTitleChangeCallback = (newTitle: string) => {
            props.changeTaskTitle(t.id, newTitle, props.id)
        }
        return (
            <div key={t.id} className={props.filter !== 'completed' && t.isDone ? 'is-done' : ''}>
                <Checkbox
                    checked={t.isDone}
                    onChange={onStatusChangeHandler}
                    color={"primary"}
                />
                <EditTableSpan title={t.title} saveTitle={onTitleChangeCallback}/>
                <IconButton onClick={() => {
                    props.removeTask(t.id, props.id)}}
                            color={"secondary"}
                >
                    <Delete/>
                </IconButton>
            </div>
        )
    })

    const onAllChangeFilter = () => props.changeFilter(props.id, "all")
    const onActiveChangeFilter = () => props.changeFilter(props.id, "active")
    const onCompletedChangeFilter = () => props.changeFilter(props.id, "completed")

    const deleteTodoList = () => props.removeTodoList(props.id)
    const changeTodoListTitle = (NewTitle: string) => {
        props.changeTodoListTitle(props.id, NewTitle)
    }

    const createTaskTitle = (title: string) => {
        props.addTask(title, props.id)
    }


    return ( // РЕТУРН JSX
        <div>
            <h3>
                <EditTableSpan title={props.title} saveTitle={changeTodoListTitle}/>
                <IconButton onClick={deleteTodoList}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={createTaskTitle}/>
            <div>
                {jsxTasks}
            </div>
            <div>
                <Button
                    variant={"contained"}
                    onClick={onAllChangeFilter}
                    color={props.filter === 'all' ? 'primary' : 'secondary'}
                >All
                </Button>
                <Button
                    variant={"contained"}
                    onClick={onActiveChangeFilter}
                    color={props.filter === 'active' ? 'primary' : 'secondary'}
                >Active
                </Button>
                <Button
                    variant={"contained"}
                    onClick={onCompletedChangeFilter}
                    color={props.filter === 'completed' ? 'primary' : 'secondary'}
                >Completed
                </Button>
            </div>
        </div>
    )
}