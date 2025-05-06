const orderModel = require('../models/order')

const orderStatusChange = async (req, res) =>{
   let {docuId, prodId, value} = req.body;
   

   if(!docuId || !prodId ||!value) return res.status(400).json({message : 'Data not provided'})

  try {
   let orderDocu = await orderModel.findById(docuId)
   let prodIndex = orderDocu.products.findIndex(prod => prod._id == prodId)
       orderDocu.products[prodIndex].status = value

    await orderDocu.save()
    
   res.status(200).json({message : 'sucess'}) 
  } 
  catch (error) {
   res.status(500).json({message : 'sever error'}) 
  }
}

module.exports = orderStatusChange