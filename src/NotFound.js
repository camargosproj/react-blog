import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="NotFound">
            <h2>Sorry</h2>
            <p>Page cannot be found!</p>
            <Link to="/">Back Home, Baby!</Link>
        </div>
    );
}
 
export default NotFound;