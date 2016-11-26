import {select, put, call} from 'redux-saga/effects'
import {TodoState} from "../model/index"
import {AddTodoAction, AddTodoExecAction, addTodoExec, incrementId as incId} from "../actions/mainAction";
import {Todo} from "../model/reducerModel";
import {injectable, inject} from "inversify";
import TYPES from "../di/types";
import {HttpClient} from "../http/common";
import "reflect-metadata";

@injectable()
export class MainSaga {

    private httpClient: HttpClient;
    constructor(
        @inject(TYPES.HttpClient) httpClient_: HttpClient
    ) {
        this.httpClient = httpClient_;
    }


    *saveTodo(action: any) {
        try {
            const func = this.httpClient.post;
            const todo: Todo = { // TODO
                id: action.id,
                text: action.text,
                completed: false
            };
            yield call(func, "api/", <any>todo);
        }
        catch (error) {
            alert(error); // TODO
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

}