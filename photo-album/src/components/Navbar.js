import {Link} from "react-router-dom";
import Pages from "../pages/Constants";

let current = Pages.HOME;

function Navbar(props) {
    current = props.current;

    return (
        <div className='navigator'>
            <Link exact to='/' className = {checkActive(Pages.HOME)? 'active' : ''}>Home</Link>
            <Link exact to='/About' className = {checkActive(Pages.ABOUT)? 'active' : ''}>About</Link>
        </div>
    );
}

function checkActive(page) {
    return page===current;
}

export default Navbar;