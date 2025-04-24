const productModel = require("../models/product")

const categoryProducts = async (req, res) => {
    let {categoryName} = req.body
    try {
        let products = await productModel.find({category : categoryName})
        res.send({
            status : 200,
            message : 'Sucess',
            products
        })
    } 
    catch (error) {
        res.send({
            status : 500,
            message : 'Server Error'
        })
    }
}


module.exports = categoryProducts