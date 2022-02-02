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
            <NavLink to="pure-component">Pure Component</NavLink>
            <NavLink to="ref">Ref</NavLink>
            <NavLink to="higher-order-component">Higher Order Component</NavLink>
            <NavLink to="render-props">Render Props</NavLink>
        </nav>
    );
}
 
export default Navbar;