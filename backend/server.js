const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
// DataBase Function
const dbConnect = require('./config/db')

app.use(express.json()) // Json parse 
app.use(cors()) // Cross Origin Request Allor
dotenv.config() // Environment Varaibles loads

dbConnect() // Database Connected

// ROUTES Imports
const userRoutes = require('./routes/userRoutes');      
const adminRoutes = require('./routes/adminRoutes')     
const productRoutes = require('./routes/productRoutes')
// const adminRoutes = require('./routes/adminRoutes');


// Use routes with prefixes
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/admin', adminRoutes);


   



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is Running in ${PORT}`))
