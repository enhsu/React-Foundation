import ClassComponent from '../components/component-foundation/ClassComponent'
import FunctionalComponent from '../components/component-foundation/FunctionalComponent'

const ComponentFoundation = () => {
    const greet = () => {
        console.log('Hi')
    }

    return (
        <div>
            <h1>Component Foundatioin</h1>
            <hr />
            <div className="class-component-part">
                <h2>Class Component</h2>
                <ClassComponent name="Ian" greet={greet}/>
            </div>
            <hr/>
            <div className="functional-component-part">
                <h2>Functional Component</h2>
                <FunctionalComponent name="Ian" greet={greet} />
            </div>
        </div>
    );
}
 
export default ComponentFoundation;