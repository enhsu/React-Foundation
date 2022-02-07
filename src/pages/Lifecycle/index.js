import { NavLink, Outlet } from "react-router-dom";

const Lifecycle = () => {
    return (
        <div>
            <h1>Lifecycle</h1>
            <nav>
                <NavLink to="mounting">Lifecycle: Mounting</NavLink>
                <NavLink to="updating">Lifecycle: Updating</NavLink>
                <NavLink to="class-vs-functional">Class Component VS Functional Component</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default Lifecycle;