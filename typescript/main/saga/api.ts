import {takeEveryAction} from "./custom"
import {select, put, call} from 'redux-saga/effects'
import {TodoState} from "../model/index"
import {AddTodoAction, AddTodoExecAction, addTodoExec, incrementId as incId} from "../actions/mainAction";
import {Todo} from "../model/reducerModel";
import {httpClient} from "../di/index";

function* saveTodo(action:any) {
    try {
        const func = httpClient().post;
        const todo:Todo = { // TODO
            id:action.id,
            text:action.text,
            completed:false
        };
        yield call(func, "api/", <any>todo);
    }
    catch(error) {
        alert(error); // TODO
    }
}

function* incrementId() {
    const nextTodoId:number = yield select((state:TodoState) => {return ++state.nextTodoId;});
    const action = incId(nextTodoId)
    yield put(action);
    return nextTodoId
}

function* addTodo(_action:any) {
    const action = <AddTodoAction>_action;
    const nextTodoId:number = yield call(incrementId);
    const execAction:AddTodoExecAction = addTodoExec(nextTodoId, action.text);
    yield put(execAction)
}

function* watchAddTodo() {
    yield takeEveryAction("ADD_TODO", addTodo);
    yield takeEveryAction("ADD_TODO_EXEC", saveTodo);
}


export function* apiSaga() {
    yield watchAddTodo()
}