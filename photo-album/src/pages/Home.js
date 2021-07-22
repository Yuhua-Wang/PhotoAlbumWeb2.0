import React, {Component} from "react";
import PhotoNode from "../components/PhotoNode";
import Navbar from "../components/Navbar";
import Pages from "../Constants";
import Manage from "../components/Manage";
import {
    deleteAllRequest,
    deletePhotoRequest,
    editPhotoRequest,
    getPhotosRequest,
    uploadPhotoRequest
} from "../Services";

export class Home extends Component{
    state = {
        photos:[]
    }

    componentDidMount() {
        getPhotosRequest().then( (photos)=>{
            this.setState({photos:photos})
        })
    }

    render() {
        return (
            <div id='home'>
                <h1>Photo Album</h1>
                <Navbar current={Pages.HOME}/>
                <div className='Photos'>
                    {this.state.photos.map((photo)=>{
                        return (
                            <PhotoNode
                                key={photo._id}
                                title={photo.title}
                                description={photo.description}
                                url={photo.URL}
                                editPhoto={this.editPhoto.bind(this,photo._id)}
                                removePhoto={this.removePhoto.bind(this,photo._id)}/>
                        )})}
                </div>

                <Manage upload={this.upload.bind(this)} deleteAll={this.deleteAll.bind(this)}/>
            </div>

        );
    }

    upload(title, url, description){
        let newPhoto = {
            title: title,
            URL: url,
            description: description
        }
        uploadPhotoRequest(newPhoto).then( (photos)=>{
                this.setState({photos:photos})
            }
        )
    }

    editPhoto(id, title, url, description) {
        let newPhoto = {
            title: title,
            URL: url,
            description: description
        }
        editPhotoRequest(newPhoto, id).then( (photos)=>{
                this.setState({photos:photos})
            }
        );
    }

    removePhoto(id) {
        deletePhotoRequest(id).then( (photos)=>{
            this.setState({photos:photos});
        })
    }

    deleteAll() {
        deleteAllRequest().then( (photos)=>{
            this.setState({photos:photos});
        })
    }

}

export default Home;