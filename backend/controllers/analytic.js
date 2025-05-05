const userModel = require('../models/user')
const productModel = require('../models/product')
const orderModel = require('../models/order')


const analytic = async (req, res) => {

  try {
    let totalUsers =   await  userModel.countDocuments()
    let totalProducts = await productModel.countDocuments()
    let totalOrders =  await  orderModel.countDocuments()
    let totalSales = 0;

    // Now Sales Find throught the Status 
    let orders =   await orderModel.find()
      orders.forEach(item => {
         item.products.forEach(product => {
             if(product.status === 'accept'){
                totalSales++
             }
         })})

       res.status(200).json(
        {message : 'Sucess',
         data : {totalUsers, totalProducts, totalOrders, totalSales}
        })  
  } 
  catch (error) {
    res.status(500).json({message : 'Server error'})
  }
}


module.exports = analytic