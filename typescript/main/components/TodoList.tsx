import * as React from 'react'
import Todo from './Todo'
import {Todo as TodoModel} from '../model/index'

interface OwnProps {
    todos:Array<TodoModel>
}

interface OwnDispatcher {
    onTodoClick:(id:number) => void
}

class TodoList extends React.Component<OwnProps & OwnDispatcher, {}> {
    render() {
        return  <ul>
            {this.props.todos.map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => this.props.onTodoClick(todo.id)}
                />
            )}
        </ul>
    }


}

export default TodoList