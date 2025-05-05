const productModel = require('../models/product')

const productInStockChanged = async (req, res) => {
    let {proId, value} = req.body
     if(!proId || !value) return res.status(400).json({message : 'id Not provide'})
    

   try {
    let product = await productModel.findByIdAndUpdate(proId, {inStock : value === 'true'})
    console.log("products", product);
    return res.status(200).json({message : 'sucess'})
   } 
   catch (error) {
    return res.status(500).json({message : 'server error'})
   }
}



module.exports = productInStockChanged;
