import CompC from "./CompC";

const CompB = () => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component B
            <CompC />
        </div>
    );
}
 
export default CompB;