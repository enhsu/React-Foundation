import { NavLink, Outlet } from 'react-router-dom'

const ShareFunctionality = () => {
    return (
        <div>
            <h1>Share Functionality</h1>
            <nav>
                <NavLink to="higher-order-component">Higher Order Component</NavLink>
                <NavLink to="render-props">Render Props</NavLink>
                <NavLink to="custom-hook">Custom Hook</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
 
export default ShareFunctionality;