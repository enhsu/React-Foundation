import Lifecycle from "../../components/lifecycle/Lifecycle";

const Mounting = () => {
    return (
        <div>
            <h3>Lifecycle: Mounting</h3>
            <p>result see console</p>
            <Lifecycle
                name="A"
                lifecycle="mounting">
                <Lifecycle
                    name="B"
                    lifecycle="mounting"
                />
            </Lifecycle>
            <hr />
            <div>
                HTML structure
                <br />
                &lt;LifeCycleA&gt;
                <br />
                &emsp;&lt;LifeCycleB /&gt;
                <br />
                &lt;/LifeCycleA&gt;
            </div>
        </div>
    );
}
 
export default Mounting;