import FocusInputWhileLoaded from '../components/ref/FocusInputWhileLoaded'
import CallbackRef from '../components/ref/CallbackRef'
import RefWithClassComponent from '../components/ref/RefWithClassComponent';
import ForwardRef from '../components/ref/ForwardRef';

const Ref = () => {
    return (
        <div>
            <FocusInputWhileLoaded />
            <CallbackRef />
            <RefWithClassComponent />
            <ForwardRef />
        </div>
    );
}
 
export default Ref;