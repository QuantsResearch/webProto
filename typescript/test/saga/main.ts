import "reflect-metadata";
import {AddTodoAction, addTodo, AddTodoExecAction, addTodoExec} from "../../main/actions/mainAction";
import {MainSaga} from "../../main/saga/main";
import {call, put} from "redux-saga/effects";
import {getMainSaga, getExStorage} from "../testHelper/di";

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
        });
    });
    describe("createTodo", function(){
        let iterator:Iterator<any>;
        const addTodoExecAction:AddTodoExecAction = addTodoExec(1, "test");
        beforeEach(() => {
           iterator = saga.createTodo(addTodoExecAction)
        });
        it("call httpClient.post with args and finish", function(){
            const exStorage = getExStorage();
            const callHttpClientPost = iterator.next().value.CALL;
            expect(callHttpClientPost.fn).toEqual(exStorage.createTodo);
            expect(iterator.next().done).toBe(true);
        });
        it("yield error when httpClient.post failed", function(){
            const error = "error occurred";
            iterator.next();
            const result = iterator.throw && iterator.throw({error:error});
            expect(result && result.value).toEqual(error)
        });
    });
});