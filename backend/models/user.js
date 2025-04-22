const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String,
    email : String,
    password: String,
    phone : String,
    address : String,
    role : String,
    orders : [{type : mongoose.Schema.Types.ObjectId, ref : 'orders'}],
    createdAt: { type: Date, default: Date.now}
})

const userModel = mongoose.model('users', schema)

module.exports = userModel