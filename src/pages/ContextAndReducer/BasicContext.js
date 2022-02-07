import UserContextProvider from "../../components/contextAndReducer/basic/UserContextProvider";
import ItemContextProvider from "../../components/contextAndReducer/basic/ItemContextProvider";
import CompA from "../../components/contextAndReducer/basic/CompA";

const BasicContext = () => {
    return (
        <div>
            <h2>Basic Context</h2>
            <UserContextProvider>
                <ItemContextProvider>
                    <CompA />
                </ItemContextProvider>
            </UserContextProvider>
        </div>
    );
}
 
export default BasicContext;