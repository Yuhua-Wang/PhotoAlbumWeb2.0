import {Component} from "react";
import Pages from "../Constants";
import Navbar from "../components/Navbar";
import {HashLink} from 'react-router-hash-link';

export class About extends Component{
    render() {
        return (
            <div id='about'>
                <h1>About This Web</h1>
                <Navbar current={Pages.ABOUT}/>

                <div id='aboutText'>
                    <p> This is a photo webpage.</p>
                    <p> You can view your photos under <HashLink exact to='/#home'><span>Home</span></HashLink> page.</p>
                    <p> The <HashLink exact to='/#manage'><span>Manage</span></HashLink> session allows to to add new
                        photos or delete all existing ones.</p>
                </div>
            </div>
        );
    }
}

export default About;