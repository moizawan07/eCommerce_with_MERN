const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
// DataBase Function
const dbConnect = require('./config/db')

app.use(express.json()) // Json parse
app.use(express.urlencoded()) 
app.use(cors()) // Cross Origin Request Allor
dotenv.config() // Environment Varaibles loads

dbConnect() // Database Connected

// ROUTES Imports
const adminRoutes = require('./routes/adminRoutes')     
const employeRoutes = require('./routes/employeRoutes')
const userRoutes = require('./routes/userRoutes');      
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')




// Use routes with prefixes
app.use('/admin',   adminRoutes);
app.use('/employe', employeRoutes);
app.use('/user',    userRoutes);
app.use('/product', productRoutes);
app.use('/order',   orderRoutes);


   

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is Running in ${PORT}`))
