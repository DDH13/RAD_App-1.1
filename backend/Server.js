const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const todoroutes = require('./routes/todoRoute')
const eventroutes = require('./routes/eventRoute')
const participantroutes = require('./routes/participantRoute')
const resourcepeopleroutes = require('./routes/ResourcePeopleRoute')
const userroutes = require('./routes/userRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to the Database"))
.catch((error)=>console.log(error))

app.use('/todo',todoroutes)
app.use('/event',eventroutes)
app.use('/participant',participantroutes)
app.use('/resourcepeople',resourcepeopleroutes)
app.use('/user',userroutes)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))