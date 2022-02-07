import { memo } from 'react'

const Title = () => {
    console.log('Rendering Title')
    return (
        <h2>useCallback and useMemo</h2>
    );
}
 
export default memo(Title);