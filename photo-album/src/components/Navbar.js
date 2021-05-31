import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import Pages from "../Constants";

let current = Pages.HOME;

function Navbar(props) {
    current = props.current;

    return (
        <div className='navigator'>
            <Link exact to='/' className = {checkActive(Pages.HOME)? 'active' : ''}>Home</Link>
            <Link exact to='/About' className = {checkActive(Pages.ABOUT)? 'active' : ''}>About</Link>
            <HashLink exact to='/#manage' className = {checkActive(Pages.MANAGE)? 'active' : ''}>Manage</HashLink>
        </div>
    );
}

function checkActive(page) {
    return page===current;
}

export default Navbar;