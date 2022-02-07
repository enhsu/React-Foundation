import CompC from "./CompC";
import CompD from "./CompD";

const CompB = () => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component B
            <CompC />
            <CompD />
        </div>
    );
}
 
export default CompB;