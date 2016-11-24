import * as React from 'react'
import {VisibilityFilter} from "../model/reducerModel";

interface Props {
    active: boolean,
    onClick:()=>void,
    filter:VisibilityFilter
}

class Link extends React.Component<Props, {}> {
    render() {
        if (this.props.active) {
            return <span>{this.props.filter}</span>
        }

        return (
            <a href="#"
               onClick={e => {
                e.preventDefault();
                this.props.onClick()
            }}
                    >
                {this.props.filter}
            </a>
        )
    }
}

export default Link