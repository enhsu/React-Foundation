import { memo } from 'react'

const Button = ({ children, handleClick}) => {
    console.log(`Rendering Button - ${children}`)
    return (
        <button onClick={handleClick}>
            { children }
        </button>
    );
}
 
export default memo(Button);