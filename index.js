const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgan = require('morgan')
const UserRoute = require('./routes/user.route')
const connectDB = require('./configs/db')

require('dotenv').config()
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/api', UserRoute)

//port
const PORT = process.env.PORT || 8888
app.listen( PORT, () => {
    console.log(`Server Successfully Running On: ${PORT}`.underline.bold.green)
})