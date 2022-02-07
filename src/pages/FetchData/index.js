import { NavLink, Outlet } from "react-router-dom";

const FetchData = () => {
    return (
        <div>
            <h1>Fetch data</h1>
            <nav>
                <NavLink to="class-component">Class Component</NavLink>
                <NavLink to="functional-component">Functional Component</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default FetchData;