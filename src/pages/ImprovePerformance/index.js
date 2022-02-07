import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom'

class ImprovePerformance extends Component {
    render() { 
        return (
            <div>
                <h1>Improve Performance</h1>
                <nav>
                    <NavLink to="pure-and-memo-component">Pure And Memo Component</NavLink>
                    <NavLink to="useCallback-and-useMemo">Hook</NavLink>
                </nav>
                <Outlet />
            </div>
        );
    }
}
 
export default ImprovePerformance;