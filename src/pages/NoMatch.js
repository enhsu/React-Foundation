import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate()

    const handleGoPreviousPage = () => {
        navigate(-1)
    }
    return (
        <div>
            Page Not Found
            <button onClick={() => handleGoPreviousPage()}>Go Previous Page</button>
        </div>
    );
}
 
export default NoMatch;