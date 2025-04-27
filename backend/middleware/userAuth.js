const userAuth = (req, res, next) => {

    if(req.user.role !== 'user') {
       return res.status(400).json({message : 'UnAuthorized Role'})
    }

    next() 
}


module.exports = userAuth