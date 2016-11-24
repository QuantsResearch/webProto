import {VisibilityFilter} from "../model/index"
import {SetVisibilityFilterAction} from "../actions/index"

const visibilityFilter = (state:VisibilityFilter = "SHOW_ALL", action:SetVisibilityFilterAction) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state
    }
};

export default visibilityFilter