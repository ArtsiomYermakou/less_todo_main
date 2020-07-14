import {FilterValuesType, TodolistType} from "../App"
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST",
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST",
    title: string
}
export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE",
    title: string
    id: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER",
    filter: FilterValuesType
    id: string
}

type ActionType = RemoveTodolistActionType |
    AddTodolistActionType |
    ChangeTodolistTitleActionType |
    ChangeTodolistFilterActionType


export const todoListReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id);
        case "ADD-TODOLIST":
            let newTodoList: TodolistType = {
                id: v1(),
                title: action.title,
                filter: "all"
            }
            return [...state, newTodoList]
        case 'CHANGE-TODOLIST-TITLE':
            const todoList = state.find(tl => tl.id === action.id)
            if (todoList) {
                todoList.title = action.title;
                return [...state];
            }
            return state;
        case "CHANGE-TODOLIST-FILTER":
            let todoListT = state.find(tl => tl.id === action.id)
            if (todoListT) {
                todoListT.filter = action.filter;
                return [...state];
            }
            return state;
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTodoListAC = (todolistId: string): RemoveTodolistActionType => {
    return  { type: "REMOVE-TODOLIST", id: todolistId }
}

export const AddTodoListAC = (newTitle: string): AddTodolistActionType => {
    return {type: "ADD-TODOLIST", title: newTitle}
}

