import { useEffect, useState } from "react";

const FunctionalComp = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    
    const logMousePosition = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        console.log('********** useEffect - trigger while state init & update **********')
    })
    useEffect(() => {
        console.log('useEffect - condition(count changed): update document title')
        document.title = `Clicked ${count} time${count === 0 ? '' : 's'}`
    }, [count])
    useEffect(() => {
        console.log('********** useEffect - trigger while component render *********')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <div className='render-update-part'>
                <h3>Update title after render and state update</h3>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click {count} time{count === 0 ? '' : 's'}</button>
            </div>
            <div className='conditional-update-part'>
                <h3>Update input won't trigger update document title</h3>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='render-part'>
                <h3>Mouse position</h3>
                <p>X: {position.x}, Y: {position.y}</p>
            </div>
        </div>
    );
}
 
export default FunctionalComp;