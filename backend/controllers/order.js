let orderModel = require('../models/order')

const order =  async (req, res) => {
   let userId = req.user.userId
  let {allcheckoutProducts} = req.body

 console.log("user ==>", userId);
 console.log("products ==>", allcheckoutProducts);

 try {
    let orderAdd = new orderModel({
        userId,
        products: allcheckoutProducts,
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