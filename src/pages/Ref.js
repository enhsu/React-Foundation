import ClassComponentFocusInputWhileLoaded from '../components/ref/ClassComponentFocusInputWhileLoaded'
import CallbackRef from '../components/ref/CallbackRef'
import RefWithClassComponent from '../components/ref/RefWithClassComponent';
import ForwardRef from '../components/ref/ForwardRef';
import FunctionalComponentFocusInput from '../components/ref/FunctioinalComponentFocusInput';
import UseRefForVariable from '../components/ref/UseRefForVariable';

const Ref = () => {
    return (
        <div>
            <ClassComponentFocusInputWhileLoaded />
            <FunctionalComponentFocusInput />
            <CallbackRef />
            <RefWithClassComponent />
            <ForwardRef />
            <UseRefForVariable />
        </div>
    );
}
 
export default Ref;