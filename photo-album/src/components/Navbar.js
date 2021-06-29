import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import Pages from "../Constants";

let current = Pages.HOME;

function Navbar(props) {
    current = props.current;

    return (
        <div className='navigator'>
            <HashLink to='/#home' className = {checkActive(Pages.HOME)? 'active' : ''}>Home</HashLink>
            <HashLink to='/#manage' className = {checkActive(Pages.MANAGE)? 'active' : ''}>Manage</HashLink>
            <Link to='/About' className = {checkActive(Pages.ABOUT)? 'active' : ''}>About</Link>
        </div>
    );
}

function checkActive(page) {
    return page===current;
}

export default Navbar;