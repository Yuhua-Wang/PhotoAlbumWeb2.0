import React, {Component} from "react";
import PhotoNode from "../components/PhotoNode";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Pages from "./Constants";



let database_json = JSON.stringify({
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
})

export class Home extends Component{
    render() {
        let database = JSON.parse(database_json);
        let size = database.size;
        let photos = database.photos;
        let album = [];

        for (let i=0; i<size; i++){
            let photo = photos[i];
            album.push(PhotoNode(photo.title, photo.description, photo.URL));
        }

        return (
            <div id='Home'>
                <h1>Photo Album</h1>
                <Navbar current={Pages.HOME}/>
                <div className='Photos'>
                    {album}
                </div>
            </div>

        );
    }
}

export default Home;