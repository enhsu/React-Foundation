import { UserContext } from "./UserContextProvider";
import { ItemContext } from "./ItemContextProvider";

const CompC = () => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component C
            <UserContext.Consumer>
                {
                    userValue => {
                        return (
                            <ItemContext.Consumer>
                                {
                                    itemValue => {
                                        return (
                                            <div>
                                                <p>{userValue}</p>
                                                <p>{itemValue}</p>
                                            </div>
                                        )
                                    }
                                }
                            </ItemContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}
 
export default CompC;