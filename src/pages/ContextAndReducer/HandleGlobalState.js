import CompA from "../../components/contextAndReducer/handleGlobalState/children/CompA";
import StoreProvider from "../../components/contextAndReducer/handleGlobalState/context/StoreProvider"
const HandleGlobalState = () => {
    return (
        <div>
            <h2>Handle Global State</h2>
            <p>Buy cake in children component</p>
            <StoreProvider>
                <CompA />
            </StoreProvider>
        </div>
    );
}
 
export default HandleGlobalState;