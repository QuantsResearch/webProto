import * as React from 'react'

interface OwnProps {
    onClick:() => void,
    completed: boolean,
    text:string
}

class Todo extends React.Component<OwnProps, {}> {
    render() {
        return <li
            onClick={this.props.onClick}
            style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
            >
            {this.props.text}
        </li>
    }
}

export default Todo