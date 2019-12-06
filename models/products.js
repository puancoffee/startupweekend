const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    productName : {
        type: String,
        required: true
    },
    descriptions : {
        type: String,
        required: true
    },
    images : {
        type: String
    }
})

module.exports = mongoose.model('product', productSchema)