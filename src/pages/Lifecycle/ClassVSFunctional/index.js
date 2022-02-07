import { NavLink, Outlet } from 'react-router-dom'

const ClassVsFunctional = () => {
    return (
        <div>
            <h2>Class Component VS Hooks</h2>
            <nav>
                <NavLink to="class-component">Class Component</NavLink>
                <NavLink to="functional-component">Functional Component</NavLink>
            </nav>
            <p>Updating page title while value changed</p>
            <Outlet />
        </div>
    );
}
 
export default ClassVsFunctional;