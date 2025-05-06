let orderModel = require('../models/order')

const userOrdersGet = async (req, res) =>  {
  let user = req.user.userId
    console.log("user ==>", user);
    
   try {
    let orders = await orderModel.find({userId : user})

    console.log("orders ==>", orders);
    

    res.status(200).json({message : 'Sucess', data : orders})
   } 
   catch (error) {
    res.status(500).json({message : 'Server error'})
   }
}

module.exports = userOrdersGet