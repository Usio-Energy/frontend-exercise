import React from 'react';
import FilterLink from '../containers/filterLink'

const Header = () => (
    <React.Fragment>
        <h1>Tasks</h1>
        <p className='filterOrder'>
        Display:
        {' '}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        </p>
    </React.Fragment>

)

export default Header
