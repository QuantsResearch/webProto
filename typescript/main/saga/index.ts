import {takeEveryAction} from "./custom";
import {MainSaga} from "./main";

export function takeMainSaga(saga:MainSaga) {
    return function* (){
        yield takeEveryAction("ADD_TODO", saga.addTodo.bind(saga));
        yield takeEveryAction("ADD_TODO_EXEC", saga.createTodo.bind(saga));
    }
}