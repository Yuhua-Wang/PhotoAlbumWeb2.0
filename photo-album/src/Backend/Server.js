let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Photo = require('./Schemas');
const DB_NAME = 'PhotoAlbum';
const mongoURL = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.uxphx.mongodb.net/' + DB_NAME +'?retryWrites=true&w=majority';

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(res=>console.log("server started on port: %s", port))
        .catch(err=>{console.log(err)});
})

// get all photos
app.get('/photos', (req, res) => {
    getAllPhotos(res);
})

// add a new photo
app.post('/photos', (req, res) => {
    const newPhoto = new Photo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        URL: req.body.URL,
        description: req.body.description
    })
    newPhoto.save().then(result=>{
        getAllPhotos(res);
    }).catch(err => {
        res.status(500).json(err);
    })
})

// edit a photo
app.put('/photos/:id', (req, res) => {
    Photo.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        URL: req.body.URL,
        description: req.body.description
    }).then(result=>{
        getAllPhotos(res);
    }).catch(err => {
        res.status(500).json(err);
    })
})

// delete all photos
app.delete('/photos', (req, res) => {
    Photo.deleteMany({}).then(result=>{
        getAllPhotos(res);
    }).catch(err=>{
        res.status(500).json(err);
    })
})

// delete a single photo
app.delete('/photos/:id', (req, res) => {
    Photo.findByIdAndRemove(req.params.id).then(result=>{
        getAllPhotos(res);
    }).catch(err=>{
        res.status(500).json(err);
    })
})

function getAllPhotos(res){
     Photo.find()
        .then(photos => {
            // console.log(photos);
            res.status(200).json(photos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
}



