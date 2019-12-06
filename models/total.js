const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TotalSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    productName : [{
        type:Schema.Types.ObjectId,
        ref: 'product'
    }]
})

module.exports = mongoose.model('total', TotalSchema)