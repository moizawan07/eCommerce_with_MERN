const adminAuth = (req, res, next) => {
   console.log(req.user.userRole);
   
    if(req.user.userRole !== 'admin') {
       return res.status(400).json({ message :'UnAuthorized Role'})
    }

    next() 
}

module.exports = adminAuth