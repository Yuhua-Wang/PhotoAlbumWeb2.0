let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');
const Photo = require('./Schemas');
const mongoURL = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.uxphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    try {
        mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (e) {
        console.log(e);
    }
    console.log("server started on port: %s", port);
})

// get all photos
app.get('/photos', (req, res) => {
    Photo.find()
        .then(photos => {
            console.log(photos);
            res.status(200).json(photos);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

// add a new photo
app.post('/photos', (req, res) => {
    let newPhoto = req.body;
    photos.push(newPhoto);
    res.json(photos);
})

// edit a photo
app.put('/photos/:index', (req, res) => {
    photos[req.params.index] = req.body;
    res.json(photos);
})

// delete all photos
app.delete('/photos', (req, res) => {
    photos = [];
    res.json(photos);
})

// delete a single photo
app.delete('/photos/:index', (req, res) => {
    photos.splice(req.params.index, 1);
    res.json(photos);
})



