import { NavLink, Outlet } from 'react-router-dom'

const CustomHook = () => {
    return (
        <div>
            <h2>Custom Hook</h2>
            <nav>
                <NavLink to="use-document-title">useDocumentTitle</NavLink>
                <NavLink to="use-counter">useCounter</NavLink>
                <NavLink to="use-input">useInput</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default CustomHook;