import React, {Component} from "react";
import PhotoNode from "../components/PhotoNode";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Pages from "../Constants";
import Manage from "../components/Manage";


export class Home extends Component{
    database_json = JSON.stringify({
        "title": "album database",
        "size": 3,
        "photos": [
            {
                "title": "Clock Tower",
                "URL": "https://news.ubc.ca/wp-content/uploads/2019/04/UBC-1024x576.jpg",
                "description": "A photo of Ladner Clock Tower and IKB library"
            },
            {
                "title": "Fountain",
                "URL": "https://images.dailyhive.com/20180606115422/ubc1.jpg",
                "description": "A photo of the fountain"
            },
            {
                "title": "Campus Overview",
                "URL": "https://www.ctvnews.ca/polopoly_fs/1.1444716.1561483853!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
                "description": "A photo of the campus from above"
            }
        ]
    });
    state = {
        photos:[]
    }

    removePhoto(index) {
        let newPhotos = Object.assign([], this.state.photos);
        newPhotos.slice(index, 1)
        this.setState({photos:newPhotos})
    }

    render() {
        let database = JSON.parse(this.database_json);
        let size = database.size;
        let photos = database.photos;
        // this.setState({photos:photos})
        this.state.photos = photos;

        return (
            <div id='Home'>
                <h1>Photo Album</h1>
                <Navbar current={Pages.HOME}/>
                <div className='Photos'>
                    {this.state.photos.map((photo,index)=>{
                        return (
                            <PhotoNode
                            title={photo.title}
                            description={photo.description}
                            url={photo.URL}
                            removePhoto={this.removePhoto.bind(this, index)}
                        />)})}
                </div>

                <Manage/>
            </div>

        );
    }
}

export default Home;