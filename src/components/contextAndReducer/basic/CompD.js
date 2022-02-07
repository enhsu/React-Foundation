import { useContext } from "react";
import { UserContext } from "./UserContextProvider";
import { ItemContext } from "./ItemContextProvider";

const CompD = () => {
    const user = useContext(UserContext)
    const item = useContext(ItemContext)

    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component D - useContext
            <p>{ user }</p>
            <p>{ item }</p>
        </div>
    );
}
 
export default CompD;