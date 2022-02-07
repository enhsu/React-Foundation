import { createContext, useReducer } from 'react';
import { cakeInitState, cakeReducer } from './cake/cakeReducer'

export const ContextStore = createContext()

const StoreProvider = ({ children }) => {
    const [cakeState, cakeDispatch] = useReducer(cakeReducer, cakeInitState)
    const rootValue = {
        cake: cakeState,
        cakeDispatch
    }

    return (
        <ContextStore.Provider value={rootValue}>
            { children }
        </ContextStore.Provider>
    );
}
 
export default StoreProvider;