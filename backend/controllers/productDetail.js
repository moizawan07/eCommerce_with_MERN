const productModel = require('../models/product')


const productDetail = async(req,res) => {
    console.log("con maa", req.body.id);
    
  try {
    let product = await productModel.findById(req.body.id)

    console.log("product ==.", product);

    res.status(200).json({message : 'sucess', data : product})
    
  } 
  catch (error) {
    res.status(500).json({message : 'server error'})
    
  }
}

module.exports = productDetail