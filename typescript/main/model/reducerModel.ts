export interface Todo {
    id:number,
    text:string,
    completed:boolean
};

export type VisibilityFilter = "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE"

export interface TodoState {
    nextTodoId: number,
    visibilityFilter: VisibilityFilter
    todos: Array<Todo>
}