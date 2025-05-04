const orderModel = require('../models/order')

const allOrdersGet = async (req, res) => {

  try {
    let orders = await orderModel.find()
    console.log("order ==>", orders);
    
    res.status(200).json({message: 'Sucess', data : orders})

  } 
  catch (error) {
    res.status(500).json({message: 'Server error'})
  }
}


module.exports = allOrdersGet