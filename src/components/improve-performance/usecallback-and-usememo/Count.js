import { memo } from 'react'

const Count = ({ text, count }) => {
    console.log(`Rendering Count - ${text}`)
    return (
        <p>{ text } - { count }</p>
    );
}
 
export default memo(Count);