const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
        _id: mongoose.SchemaTypes.ObjectId,
        title: String,
        URL: String,
        description: String
    },
    {
        collection: 'Photos'
    })

module.exports = mongoose.model('Photo', PhotoSchema);