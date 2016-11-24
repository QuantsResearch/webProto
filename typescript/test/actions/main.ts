import {addTodo, AddTodoAction} from "../../main/actions/mainAction";

describe("action creator", function() {
    describe('addTodo', function(){
        it('creates correct AddTodoAction', function(){
            const text = "Test codes save our time.";
            const expected: AddTodoAction = {
                type: "ADD_TODO",
                text: text
            };
            expect(addTodo(text)).toEqual(expected)
        });
    });
});