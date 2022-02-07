import { NavLink, Outlet } from "react-router-dom";

const ContextAndReducer = () => {
    return (
        <div>
            <h1>Context and Reducer</h1>
            <nav>
                <NavLink to="basic-context">Basic Context</NavLink>
                <NavLink to="basic-reducer">Basic Reducer</NavLink>
                <NavLink to="handle-global-state">Handle Global State</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default ContextAndReducer;