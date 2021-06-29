const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    _id: mongoose.SchemaTypes.ObjectId,
    title: String,
    URL: String,
    Description: String
})

module.exports = mongoose.model('Photo', PhotoSchema);