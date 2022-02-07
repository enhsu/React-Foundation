import { NavLink, useMatch } from 'react-router-dom'

const Navbar = () => {
    const matchRoot = useMatch('/')
    const matchIndexComponent = useMatch('/component-foundation')
    const rootClassName = () => {
        return matchRoot ? 'active' : matchIndexComponent ? 'active' : ''
    }

    return (
        <nav>
            <NavLink className={rootClassName} to="component-foundation">Component Foundation</NavLink>
            <NavLink to="lifecycle">Lifecycle</NavLink>
            <NavLink to="improve-performance">Improve Performance</NavLink>
            <NavLink to="ref">Ref</NavLink>
            <NavLink to="share-functionality">Share Functionality</NavLink>
            <NavLink to="fetch-data">Fetch Data</NavLink>
            <NavLink to="context">Context</NavLink>
        </nav>
    );
}
 
export default Navbar;