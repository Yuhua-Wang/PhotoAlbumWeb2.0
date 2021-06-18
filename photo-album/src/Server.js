let express = require('express');
let app = express();
const PORT = process.env.PORT || 5000

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    const database_json = {
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
    };
    res.json(database_json);
})

let server = app.listen(PORT, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("server started on port: %s", port)
})


