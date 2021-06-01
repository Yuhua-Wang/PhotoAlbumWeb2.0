import React, {Component} from "react";
import PhotoNode from "../components/PhotoNode";
import Navbar from "../components/Navbar";
import Pages from "../Constants";
import Manage from "../components/Manage";

// The mechanism for removing/adding components dynamically is inspired by:
// https://blog.csdn.net/weixin_30760895/article/details/97354604

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
    database = JSON.parse(this.database_json);
    state = {
        photos:this.database.photos
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
                                title={photo.title}
                                description={photo.description}
                                url={photo.URL}
                                removePhoto={this.removePhoto.bind(this,index)}/>
                        )})}
                </div>

                <Manage upload={this.upload.bind(this)} deleteAll={this.deleteAll.bind(this)}/>
            </div>

        );
    }

    upload(title, url, description){
        let newPhotos = Object.assign([], this.state.photos);
        newPhotos.push(
            {
                title: title,
                URL: url,
                description: description
            }
        )
        this.setState({photos:newPhotos});
    }

    removePhoto(index) {
        let newPhotos = Object.assign([], this.state.photos);
        newPhotos.splice(index, 1);
        this.setState({photos:newPhotos});
    }

    deleteAll() {
        this.setState({photos:[]});
    }

}

export default Home;