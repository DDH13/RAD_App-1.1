const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model('task',todoSchema)