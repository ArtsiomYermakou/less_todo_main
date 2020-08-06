import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"},
    ]);

    let [tasksObj, setTasksObj] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "Book", isDone: false},
            {id: v1(), title: "Milk", isDone: true},
        ]
    });


    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id != id);
        tasksObj[todolistId] = filteredTasks;
        setTasksObj({...tasksObj});
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistId];
        let newTasks = [task, ...tasks];
        tasksObj[todolistId] = newTasks;

        setTasksObj({...tasksObj});
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasksObj[todolistId];
        let task = todolistTasks.find(t => t.id === id);
        if (task) {
            task.isDone = isDone;
            setTasksObj({...tasksObj});
        }
    }


    function changeTaskTitle(taskId: string, newTitle: string, todolistId: string) {
        let todolistTasks = tasksObj[todolistId];
        let task = todolistTasks.find(t => t.id === taskId);
        if (task) {
            task.title = newTitle;
            setTasksObj({...tasksObj});
        }
    }


    function changeFilter(value: FilterValuesType, id: string) {
        let todolist = todolists.find(tl => tl.id === id);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists]);
        }
    }




    let removeTodolist = (id: string) => {
        setTodolists(todolists.filter(tl => tl.id !== id));
        delete tasksObj[id];
        setTasksObj({...tasksObj});
    }

    function changeTodolistTitle(id: string, title: string) {
        const todolist = todolists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = title;
            setTodolists([...todolists]);
        }
    }

    function addTodolist(title: string) {
        let todolist: TodolistType = {
            id: v1(),
            filter: "all",
            title: title
        };
        setTodolists([todolist, ...todolists])
        setTasksObj({...tasksObj, [todolist.id]: []})
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        TODOLIST
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{ padding: "20px" }}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map((tl) => {

                            let tasksForTodolist = tasksObj[tl.id];

                            if (tl.filter === "active") {
                                tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
                            }

                            return <Grid item>
                                <Paper style={ { padding: "10px" } }>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        changeTaskTitle={changeTaskTitle}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
