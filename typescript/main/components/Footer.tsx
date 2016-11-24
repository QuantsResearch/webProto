import * as React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
{" "}
<FilterLink filter="SHOW_ALL" active={false} onClick={() => {}}>
    All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE" active={false} onClick={() => {}}>
    Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED" active={false} onClick={() => {}}>
    Completed
    </FilterLink>
    </p>
);

export default Footer