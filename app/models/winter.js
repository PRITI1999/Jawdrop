const mongoose = require('mongoose')
const Schema = mongoose.Schema

const winterSchema = new Schema({
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

const Winter = mongoose.model('Winter', winterSchema)

module.exports = Winter