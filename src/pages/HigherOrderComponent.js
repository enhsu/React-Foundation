import ClickCount from "../components/higher-order-component/ClickCount";
import HoverCount from "../components/higher-order-component/HoverCount";

const HigherOrderComponent = () => {
    return (
        <div>
            <ClickCount name="user" />
            <HoverCount name="you" />
        </div>
    );
}
 
export default HigherOrderComponent;