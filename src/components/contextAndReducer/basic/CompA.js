import CompB from "./CompB";

const CompA = () => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '5px'
        }}>
            Component A
            <CompB />
        </div>
    );
}
 
export default CompA;