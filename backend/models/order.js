const mongoose = require('mongoose')

const schema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'},
    products: [
        {
            pId: String,
            title : String,
            imageUrl: String,
            newPrice : Number,
            oldPrice : Number,
            quanity : Number,
            rating : Number,
            reviews : Number,
            discount : String,
            category : String,
            inStock : Boolean,
            status : String
        }],
        userName: String,
        userNum: Number,
        userCity: String,
        userAdd: String,
        userPM: String,
    createdAt: {
        type: Date,
        default: Date.now,}    
})


module.exports = mongoose.model("orders", schema)