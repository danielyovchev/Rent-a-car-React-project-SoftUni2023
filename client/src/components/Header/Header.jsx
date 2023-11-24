import { Link } from "react-router-dom";
import { PATHS } from "../../utils/routeConstants";

export default function Header() {
    return( 
    <header>
        <h3>Rent-A-Car</h3>
        <nav>
            {/* <Link to={PATHS.HOME}>Home</Link>
            <Link to={PATHS.CARS}>Cars</Link>
            <Link to={PATHS.ABOUT}>About us</Link> */}
        </nav>
    </header>);
}