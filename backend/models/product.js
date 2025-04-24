const mongoose = require('mongoose')

const schema = mongoose.Schema({
        discount: String,
        imageUrl: String,
        title: String,   // no idea
        oldPrice: Number,
        newPrice: Number,
        rating: Number,
        reviews: Number,
        category: String,
        inStock : Boolean    
})

const productModel = mongoose.model('products', schema)

module.exports = productModel