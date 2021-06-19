let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: false}));
let databaseJSON = JSON.stringify( [
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
]);
let database = [];

// get all photos
app.get('/photos', (req, res) => {
    res.json(database);
})

// add a new photo
app.post('/photos', (req, res) => {
    let newPhoto = req.body;
    database.push(newPhoto);
    res.json(database);
})

// edit a photo
app.put('/photos/:index', (req, res) => {
    database[req.params.index] = req.body;
    res.json(database);
})

// delete all photos
app.delete('/photos', (req, res) => {
    database = [];
    res.json(database);
})

// delete a single photo
app.delete('/photos/:index', (req, res) => {
    database.splice(req.params.index, 1);
    res.json(database);
})

let server = app.listen(PORT, function () {
    let host = server.address().address;
    let port = server.address().port;
    database = JSON.parse(databaseJSON);
    console.log("server started on port: %s", port)
})


