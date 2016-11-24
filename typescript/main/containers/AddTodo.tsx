import * as React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {IDispatch} from "~react-redux~redux";

interface ConnectedProps {
}

interface ConnectedDispatch {
    addTodo: (value: String) => void
}

// Container and component are mixed. Technically we could split it into two components but it might be too early at this stage.
class AddTodoComponent extends React.Component<ConnectedProps & ConnectedDispatch, {}> {
    render(){
        let input:any; // TODO Which type?

        return (
            <div>
                <form onSubmit={e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.addTodo(input.value);
                        input.value = ''
                    }}>
                                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch:IDispatch) => ({
    addTodo: (value:string) => {
        dispatch(addTodo(value))
    }
});

let AddTodo = connect(mapStateToProps,mapDispatchToProps)(AddTodoComponent);

export default AddTodo