import {AddTodoAction, addTodo, AddTodoExecAction, addTodoExec} from "../../main/actions/mainAction";
import kernel from "../../main/di/inversify.config"
import TYPES from "../../main/di/types";
import {MainSaga} from "../../main/saga/main";
import {call, put} from "redux-saga/effects";

function getMainSaga():MainSaga {
    return kernel.get<MainSaga>(TYPES.MainSaga)
}

const saga:MainSaga = getMainSaga();
const addTodoAction:AddTodoAction = addTodo("test");

describe("mainSaga", function() {
    describe("addTodo", function(){
        const iterator = saga.addTodo(addTodoAction);
        it("call incrementId", function(){
            expect(iterator.next().value).toEqual(call(saga.incrementId))
        });
        it("then, put addTodoExecAction", function () {
            const nextTodoId = 5;
            const addTodoExecAction:AddTodoExecAction = addTodoExec(nextTodoId, addTodoAction.text)
            const next = iterator.next(nextTodoId);
            expect(next.value).toEqual(put(addTodoExecAction))
        })
    });
});