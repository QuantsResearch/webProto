import {Todo} from "../model/index";
import {AddTodoExecAction, ToggleTodoAction} from "../actions/mainAction";

const toggleTodo = (state:Todo, action:ToggleTodoAction):Todo => {
    if (state.id !== action.id) {
        return state
    }

    return Object.assign({}, state, {
        completed: !state.completed
    })
};

const todos = (state:Array<Todo> = [], action:AddTodoExecAction):Array<Todo> => {
    switch (action.type) {
        case "ADD_TODO_EXEC":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(t =>
                toggleTodo(t, action)
            );
        default:
            return state
    }
};

export default todos