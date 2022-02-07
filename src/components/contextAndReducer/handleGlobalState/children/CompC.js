import { useContext } from 'react'
import { ContextStore } from '../context/StoreProvider';
import { buyCake } from '../context'

const CompC = () => {
    const { cake, cakeDispatch } = useContext(ContextStore)

    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component C
            <p>Cake number - { cake.num }</p>
            <button onClick={() => cakeDispatch(buyCake(1))}>Buy 1 cake</button>
        </div>
    );
}
 
export default CompC;