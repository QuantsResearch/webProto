import {IncrementIdAction} from "../actions/index"

const nextTodoId = (state:number = 0, action:IncrementIdAction) => {
    switch (action.type) {
        case "INCREMENT_ID":
            return action.id;
        default:
            return state;
    }
}

export default nextTodoId