const productModel = require("../models/product");

const getProducts = async (req, res) => {
  try {
    let get = await productModel.find();

    res.send({
      status: 200,
      message: "Sucessfully get Products",
      products : get
    });
  } 
  catch (error) {
    res.send({
      status: 500,
      message: "Server Error",
    })}

};

module.exports = getProducts;
