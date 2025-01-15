const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./Routes/productRoute')
const cors = require('cors')
const app = express()
const DB_URL = 'mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const port = 3000


app.use(express.json())
app.use(cors())
app.use('/api/products', productRoute)


mongoose.connect(DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}, url is http://localhost:3000/api/products`)
    })
    console.log('Connected!')
  });