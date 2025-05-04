let orderModel = require('../models/order')
let userModel = require('../models/user')

const order =  async (req, res) => {
   let {userId} = req.user
  let {allcheckoutProducts, userName, userNum, userCity, userAdd, userPM} = req.body

 try {
    let orderAdd = new orderModel({
        userId,
        products: allcheckoutProducts,
        userName, 
        userNum,
        userCity,
        userAdd,
        userPM,
        createdAt: new Date()
    })

    await orderAdd.save()
    console.log("order add==>", orderAdd);

    let userDocument = await userModel.findById(userId)
       userDocument.orders.push(orderAdd._id)
     await userDocument.save()
    
    
    res.status(200).json({message : 'sucess'})
 }
  
 catch (error) {
    res.status(500).json({message : 'server error'})
 }

}

module.exports = order