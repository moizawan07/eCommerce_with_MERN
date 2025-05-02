let orderModel = require('../models/order')

const order =  async (req, res) => {
   let userId = req.user.userId
  let {allcheckoutProducts, userName, userNum, userCity, userAdd, userPM} = req.body

 console.log("user ==>", userId);
 console.log("products ==>", req.body);

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
    
    res.status(200).json({message : 'sucess'})
 }
  
 catch (error) {
    res.status(500).json({message : 'server error'})
 }

}

module.exports = order