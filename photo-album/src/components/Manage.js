import Pages from "../Constants";
import Navbar from "./Navbar";
import React, {Component} from "react";
import {InputForm} from "./InputForm";

export class Manage extends Component{
    render(){
        return (
            <div id='manage'>
                <h1>Manage</h1>
                <Navbar current={Pages.MANAGE}/>

                <div id='upload'>
                    <InputForm
                        id='uploadForm'
                        title=''
                        url=''
                        description=''
                        action={this.props.upload.bind(this)}
                        actionDes='Upload Photo'
                    />
                </div>

                <button id="deleteAll" type="button" onClick={this.props.deleteAll}>Delete All Photos</button>
            </div>
        );
    }
}



export default Manage;