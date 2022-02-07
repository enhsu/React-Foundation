import { createContext } from "react";

export const UserContext = createContext()

const ContextProvider = ({ children }) => {
    return (
        <UserContext.Provider value="a user">
            { children }
        </UserContext.Provider>
    );
}
 
export default ContextProvider;