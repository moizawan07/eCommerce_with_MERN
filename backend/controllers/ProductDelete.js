const productModel = require("../models/product");

const productDelete = (req, res) => {
  let { productId } = req.body;
  try {
    // let product = await productModel.Dlete(productId)

    res.status(200).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = productDelete;
