const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    date:{
        type:Date,
        require:true
    },
    club:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('event', eventSchema)