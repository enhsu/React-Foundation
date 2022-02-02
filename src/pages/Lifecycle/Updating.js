import Lifecycle from "../../components/lifecycle/Lifecycle";

const Updating = () => {
    return (
        <div>
            <h3>Lifecycle result see console</h3>
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