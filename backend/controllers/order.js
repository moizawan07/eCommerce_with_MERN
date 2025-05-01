let orderModel = require('../models/order')

const order =  async (req, res) => {
    let userId = req.user.userId
  let {cartItems} = req.body
 console.log("user ==>", userId);

 try {
    let orderAdd = new orderModel({
        userId,
        products: cartItems,
        createdAt: new Date()
    })

    await orderAdd
    console.log("order add==>", orderAdd);
    
    res.send(200).json({message : 'sucess'})
 }
  
 catch (error) {
    res.send(500).json({message : 'server error'})
 }

}

module.exports = order