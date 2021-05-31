import {Component} from "react";
import Pages from "./Constants";
import Navbar from "../components/Navbar";

export class About extends Component{
    render() {
        return (
            <div id='About'>
                <h1>About This Web</h1>
                <Navbar current={Pages.ABOUT}/>
            </div>
        );
    }
}

export default About;