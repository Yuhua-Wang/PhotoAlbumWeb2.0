import {Link} from "react-router-dom";

let current = 'Home';

function Navbar(props) {
    current = props.current;

    return (
        <div className='navigator'>
            <Link exact to='/' className = {checkActive('Home')? 'active' : ''}>Home</Link>
            <Link exact to='/About' className = {checkActive('About')? 'active' : ''}>About</Link>
        </div>
    );
}

function checkActive(page) {
    return page===current;
}

export default Navbar;