import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import {Todo, TodoState} from "../model/index";
import {IDispatch} from "~react-redux~redux";

const getVisibleTodos = (todos:Array<Todo>, filter:String):Array<Todo> | undefined => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

const mapStateToProps = (state:TodoState) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch:IDispatch) => {
    return {
        onTodoClick: (id:number) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList