import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons';


export type filterValueType = "all" | "active" | "completed"
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type TodoListType = {
    id: string,
    title: string,
    filter: filterValueType
}

const App = () => {
    let todoListID1 = v1();
    let todoListID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todoListID1, title: "Books", filter: "all"},
        {id: todoListID2, title: "Songs", filter: "active"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>(
        {
            [todoListID1]:
                [
                    {id: v1(), title: "HTML&CSS", isDone: true},
                    {id: v1(), title: "JS", isDone: true},
                    {id: v1(), title: "ReactJS", isDone: false},
                    {id: v1(), title: "Redux", isDone: false},
                ],
            [todoListID2]:
                [
                    {id: v1(), title: "Redux", isDone: false},
                    {id: v1(), title: "RestApi", isDone: false},
                    {id: v1(), title: "GraphQL", isDone: false}
                ]
        }
    )

    // let [filter, setFilter] = useState<filterValueType>('all')

    function removeTask(id: string, todoListID: string) {
        let todoListTasks = tasks[todoListID]
        tasks[todoListID] = todoListTasks.filter(t => t.id !== id)
        setTasks({...tasks})
    }

    const addTask = (title: string, todoListID: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let todoListTasks = tasks[todoListID]
        tasks[todoListID] = [newTask, ...todoListTasks]
        setTasks({...tasks})
    }

    function changeStatus(id: string, isDone: boolean, todoListID: string) {
        let todoListTasks = tasks[todoListID]
        let task = todoListTasks.find(task => task.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeTaskTitle(id: string, title: string, todoListID: string) {
        let todoListTasks = tasks[todoListID];
        let task = todoListTasks.find(task => task.id === id)
        if (task) {
            task.title = title
            setTasks({...tasks})
        }
    }

    function changeFilter(id: string, value: filterValueType) {
        let todoList = todoLists.find(tl => tl.id === id)
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists])
        }
    }

    function removeTodoList(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id))
        delete tasks[id];
        setTasks({...tasks})
    }

    function changeTodoListTitle(id: string, NewTitle: string) {
        const todoList = todoLists.find(tl => tl.id === id);
        if (todoList) {
            todoList.title = NewTitle
            setTodoLists([...todoLists])
        }
    }

    function addTodoList(title: string) {
        let newTodoListID = v1()
        let newTodoList: TodoListType = {
            id: newTodoListID,
            title: title,
            filter: "all"
        }
        setTodoLists([...todoLists, newTodoList])
        setTasks({
            ...tasks,
            [newTodoListID]: []
        })
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoLists.map(tl => {

                        let allTasks = tasks[tl.id]

                        let tasksForToDoList = allTasks

                        if (tl.filter === "active") {
                            tasksForToDoList = allTasks.filter(t => !t.isDone)
                        }
                        if (tl.filter === "completed") {
                            tasksForToDoList = allTasks.filter(t => t.isDone)
                        }

                        return (
                            <Grid item key={tl.id}>
                                <Paper style={{padding: "10px"}}>
                                    <Todolist
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForToDoList}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodoList={removeTodoList}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodoListTitle={changeTodoListTitle}
                                    />
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    );
}

export default App;
