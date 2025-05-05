const productModel = require("../models/product");

const productDelete = async (req, res) => {
  let { proId } = req.body;
  console.log("prois", proId);

  if(!proId) return res.status(400).json({ message: "Product id not provided" });
  
  try {
    let product = await productModel.findByIdAndDelete(proId)
    console.log("product", product);
    
    res.status(200).json({ message: "Sucess" });

  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = productDelete;
