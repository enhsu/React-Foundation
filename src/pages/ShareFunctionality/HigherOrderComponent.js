import ClickCount from "../../components/share-functionality/higher-order-component/ClickCount";
import HoverCount from "../../components/share-functionality/higher-order-component/HoverCount";

const HigherOrderComponent = () => {
    return (
        <div>
            <h2>Higher Order Component</h2>
            <ClickCount name="user" />
            <HoverCount name="you" />
        </div>
    );
}
 
export default HigherOrderComponent;