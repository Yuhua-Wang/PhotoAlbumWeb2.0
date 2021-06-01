import Pages from "../Constants";
import Navbar from "./Navbar";
import React, {Component} from "react";

export class Manage extends Component{
    state = {
        title: '',
        url: '',
        description: ''
    }

    changeTitle(event){
        this.setState({title: event.target.value});
    }
    changeURL(event){
        this.setState({url: event.target.value});
    }
    changeDescription(event){
        this.setState({description: event.target.value});
    }

    render(){
        return (
            <div id='manage'>
                <h1>Manage</h1>
                <Navbar current={Pages.MANAGE}/>

                <div id='upload'>
                    <form>
                        <label >Title:</label>
                        <input type="text" size="50" value={this.state.title} onChange={this.changeTitle.bind(this)}/><br/><br/>
                        <label htmlFor="url">URL: </label>
                        <input type="url" size="50" value={this.state.url} onChange={this.changeURL.bind(this)}/><br/><br/>
                        <label >Description: </label>
                        <textarea rows="10" cols="50" value={this.state.description} onChange={this.changeDescription.bind(this)}/><br/><br/>
                        <button type="button" onClick={this.handleUpload.bind(this)}>Upload Photo</button>
                        <button type="button" onClick={this.resetInput.bind(this)}>Clear Inputs</button>
                    </form>
                </div>

                <button id="deleteAll" type="button" onClick={this.props.deleteAll}>Delete All Photos</button>
            </div>
        );
    }

    handleUpload(){
        this.props.upload(this.state.title, this.state.url, this.state.description);
        this.resetInput();
    }

    resetInput(){
        this.setState({
            title: '',
            url: '',
            description: ''
        })
    }
}



export default Manage;