const productModel= require('../models/product')

const addToCardProducts = async (req, res) => {
    let productsIds = req.body
    console.log("products id==>", productsIds);
    

  try {
    const unorderedProducts = await productModel.find({ _id: { $in: productsIds } });

  // Now reorder according to productIds
const orderedProducts = productsIds.map(id => 
    unorderedProducts.find(product => product._id.toString() === id)
  );

    res.status(200).json({message : 'Success', data :orderedProducts })
    
  } catch (error) {
    res.status(500).json({message : 'Server Error..'})
  }
}

module.exports = addToCardProducts