import {VisibilityFilter} from "../model/index"

export type ActionType =
    "ADD_TODO"
    | "ADD_TODO_EXEC"
    | "SET_VISIBILITY_FILTER"
    | "TOGGLE_TODO"
    | "ADD_TODO_COMPLETE"
    | "INCREMENT_ID"

export interface AddTodoAction {
    type: ActionType,
    text: string
}

export interface AddTodoExecAction extends AddTodoAction {
    id: number,
}

export interface SetVisibilityFilterAction {
    type: ActionType,
    filter: VisibilityFilter
}

export interface ToggleTodoAction {
    type: ActionType,
    id: number
}

export interface IncrementIdAction {
    type: ActionType,
    id: number
}

export const addTodo = (text:string):AddTodoAction => {
    return {
        type: "ADD_TODO",
        text: text
    }
};

export const addTodoExec = (id:number, text:string):AddTodoExecAction => {
    return {
        type: "ADD_TODO_EXEC",
        id: id,
        text: text
    }
};

export const setVisibilityFilter = (filter:VisibilityFilter):SetVisibilityFilterAction => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter: filter
    }
};

export const toggleTodo = (id:number):ToggleTodoAction => {
    return {
        type: "TOGGLE_TODO",
        id:id
    }
};

export const incrementId = (id:number):IncrementIdAction => {
    return {
        type: "INCREMENT_ID",
        id:id
    }
};