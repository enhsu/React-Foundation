import Lifecycle from "../../components/lifecycle/Lifecycle";

const Updating = () => {
    return (
        <div>
            <h3>Lifecycle: Updating</h3>
            <p>result see console</p>
            <Lifecycle
                name="A"
                lifecycle="updating">
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
 
export default Updating;