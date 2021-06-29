const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://m001-student:<m001-mongodb-basics>@sandbox.uxphx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

