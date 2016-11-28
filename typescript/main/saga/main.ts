import {select, put, call} from 'redux-saga/effects'
import {TodoState} from "../model/index"
import {
    AddTodoAction, AddTodoExecAction, addTodoExec, incrementId as incId,
    ToggleTodoAction
} from "../actions/mainAction";
import {Todo} from "../model/reducerModel";
import {injectable, inject} from "inversify";
import TYPES from "../di/types";
import "reflect-metadata";
import {ExStorage} from "../exStorage/exStorage";

@injectable()
export class MainSaga {

    private exStorage: ExStorage;
    constructor(
        @inject(TYPES.ExStorage) exStorage_: ExStorage
    ) {
        this.exStorage = exStorage_;
    }


    *createTodo(action: any) {
        try {
            const todo: Todo = { // TODO
                id: action.id,
                text: action.text,
                completed: false
            };
            yield call(this.exStorage.createTodo, <any>todo);
        }
        catch (error) {
            alert(error.error); // TODO
            yield error.error
        }
    }

    *updateTodo(todo: Todo) {
        try {
            yield call(this.exStorage.updateTodo, <any>todo);
        }
        catch (error) {
            alert(error.error); // TODO
            yield error.error
        }
    }

    *incrementId() {
        const nextTodoId: number = yield select((state: TodoState) => {
            return ++state.nextTodoId;
        });
        const action = incId(nextTodoId)
        yield put(action);
        return nextTodoId
    }

    *addTodo(_action: any) {
        const action = <AddTodoAction>_action;
        const nextTodoId: number = yield call(this.incrementId);
        const execAction: AddTodoExecAction = addTodoExec(nextTodoId, action.text);
        yield put(execAction)
    }

    *toggleTodo(_action:any) {
        const action = <ToggleTodoAction>_action;
        const todo: Todo = yield select((state: TodoState) => {
            return state.todos.filter((t:Todo) => {return t.id == action.id})[0]
        });
        todo.completed = !todo.completed;
        yield this.updateTodo(todo)
    }

}