import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist"
import {v1} from "uuid";


type TodoListType = {
    id: string
    title: string
    filter: FilerValuesType

}

export type FilerValuesType = "all" | "completed" | "active";

type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        {id: todolistID1, title: "Books", filter: "all"},
        {id: todolistID2, title: "Songs", filter: "all"},
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
            [todolistID1]: [
                {id: v1(), title: "CSS", isDone: true},
                {id: v1(), title: "JS", isDone: true},
                {id: v1(), title: "React", isDone: false},
            ],
            [todolistID2]: [
                {id: v1(), title: "Redux", isDone: false},
                {id: v1(), title: "GraphQL", isDone: false},
            ]
        }
    );

    function removeTask(id: string, todoListID: string) {
        let todoListTasks = tasks[todoListID];
        tasks[todoListID] = todoListTasks.filter(t => t.id !== id);
        setTasks({...tasks});
    }

    function addTask(title: string, todoListID: string) {
        let newTask = { id: v1(), title: title, isDone: false};
        let todoListTasks = tasks[todoListID];
        tasks[todoListID] = [newTask, ...todoListTasks];
        setTasks({...tasks})
    }

    function changeStatus(taskId: string, isDone: boolean, todoListID: string) {
        let todoListTasks = tasks[todoListID];
        let task = todoListTasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
        }
        setTasks({...tasks});
    }

    function changeFilter(id: string, value: FilerValuesType) {
        let todolist = todoLists.find(tl => tl.id === id);
        if(todolist){
            todolist.filter = value;
            setTodoLists([...todoLists]);
        }
    }

    function removeTodoList(id: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== id));
        delete tasks[id];
        setTasks({...tasks})
    }

    return (
        <div className="App">
            {todoLists.map(tl => {
                let allTasks = tasks[tl.id];
                let tasksForTodolist = allTasks;

                if (tl.filter === "completed") {
                    tasksForTodolist = allTasks.filter(t => t.isDone === true);
                }
                if (tl.filter === "active") {
                    tasksForTodolist = allTasks.filter(t => t.isDone === false);
                }
                return (
                    <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodoList={removeTodoList}
                    />
                )
            })}
            {/*<Todolist title="What to learn"*/}
            {/*          tasks={tasksForTodolist}*/}
            {/*          removeTask = {removeTask}*/}
            {/*          changeFilter={changeFilter}*/}
            {/*          addTask={addTask}*/}
            {/*          changeTaskStatus={changeStatus}*/}
            {/*          filter={filter}*/}
            {/*/>*/}
        </div>
    );
}

export default App;