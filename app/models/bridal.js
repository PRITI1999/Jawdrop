const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bridalSchema = new Schema({
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

const Bridal = mongoose.model('Bridal', bridalSchema)

module.exports = Bridal