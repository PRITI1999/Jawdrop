const mongoose = require('mongoose')
const Schema = mongoose.Schema

const summerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
})

const Summer = mongoose.model('Summer', summerSchema)

module.exports = Summer