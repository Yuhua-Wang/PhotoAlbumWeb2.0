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
} from "../Backend/Services";

// The mechanism for removing/adding components dynamically is inspired by:
// https://blog.csdn.net/weixin_30760895/article/details/97354604

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
                    {this.state.photos.map((photo,index)=>{
                        return (
                            <PhotoNode
                                key={index}
                                title={photo.title}
                                description={photo.description}
                                url={photo.URL}
                                editPhoto={this.editPhoto.bind(this,index)}
                                removePhoto={this.removePhoto.bind(this,index)}/>
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

    editPhoto(index, title, url, description) {
        let newPhoto = {
            title: title,
            URL: url,
            description: description
        }
        editPhotoRequest(newPhoto, index).then( (photos)=>{
                this.setState({photos:photos})
            }
        );
    }

    removePhoto(index) {
        deletePhotoRequest(index).then( (photos)=>{
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