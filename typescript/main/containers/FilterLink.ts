import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import {IMapDispatchToProps} from "react-redux";
import {VisibilityFilter} from "../model/index"
import {IDispatch} from "~react-redux~redux";
import {TodoState} from "../model/index"

interface OwnProps {
    filter:VisibilityFilter
}

const mapStateToProps = (state:TodoState, ownProps:OwnProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps:IMapDispatchToProps = (dispatch:IDispatch, ownProps:OwnProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink