import React from "react";
import {action} from "@storybook/addon-actions";
import {Task} from "../Task";
import {Meta} from "@storybook/react";

export default {
    title: "Task Stories",
    component: Task
} as Meta;


const changeTaskStatus = action("Change task status");
const changeTaskTitle = action("Change task title");
const removeTask = action("Remove task");


export const TaskBasicExample = (props: any) => {
    return (
        <>
        <Task task={{id: "1", isDone: true, title: "JS"}}
              TodolistId={"1"}
              changeTaskStatus={changeTaskStatus}
              changeTaskTitle={changeTaskTitle}
              removeTask={removeTask}
        />
            <Task task={{id: "2", isDone: false, title: "CSS"}}
                  TodolistId={"2"}
                  changeTaskStatus={changeTaskStatus}
                  changeTaskTitle={changeTaskTitle}
                  removeTask={removeTask}
            />
        </>
    )
}


