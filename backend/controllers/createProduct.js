const cloudinary = require("../config/cloudinary");
const productModel = require("../models/product");
const {Readable} = require('stream')


const createProduct =  (req, res) => {
  let file = req.file;
  let buffer =  file.buffer;
  let {inStock} = req.body

  let cloudinaryStream =   cloudinary.uploader.upload_stream({
      folder : "Tekvibe(Ecom)_productImages",
    }, 
    (err, result) => {
       if(err) return res.send({status : 500, message : "Server Error..."})

        productModel.create({
          ...req.body,
          imageUrl : result.secure_url,
          inStock : inStock === 'true' 
        })

        res.send({status : 201, message : 'Sucessfully uploaded'})
    })

    
    

    Readable.from(buffer).pipe(cloudinaryStream)

  
};

module.exports = createProduct;
