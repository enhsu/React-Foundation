import { createContext } from "react";

export const ItemContext = createContext()

const ContextProvider = ({ children }) => {
    return (
        <ItemContext.Provider value="a item">
            { children }
        </ItemContext.Provider>
    );
}
 
export default ContextProvider;