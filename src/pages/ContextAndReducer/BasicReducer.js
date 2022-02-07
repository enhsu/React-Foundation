import { useReducer } from "react";

const initialState = {
    countOne: 0,
    countTwo: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementOne':
            return { ...state, countOne: state.countOne + action.payload }
        case 'decrementOne':
            return { ...state, countOne: state.countOne - action.payload }
        case 'incrementTwo':
            return { ...state, countTwo: state.countTwo + action.payload }
        case 'decrementTwo':
            return { ...state, countTwo: state.countTwo - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const BasicReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>Basic Reducer</h2>
            <div>Count One - { state.countOne }</div>
            <div>Count Two - { state.countTwo }</div>
            <button onClick={() => dispatch({ type: 'incrementOne', payload: 1})}>Increment Count One</button>
            <button onClick={() => dispatch({ type: 'decrementOne', payload: 1})}>Decrement Count One</button>
            <button onClick={() => dispatch({ type: 'incrementTwo', payload: 1})}>Increment Count Two</button>
            <button onClick={() => dispatch({ type: 'decrementTwo', payload: 1})}>Decrement Count Two</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
        </div>
    );
}
 
export default BasicReducer;