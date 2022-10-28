const mongoose = require('mongoose')
const subpSchema = new mongoose.Schema({
    name:String,
    email:String
})
const participantSchema = new mongoose.Schema({
    eventName:{
        type:String,
        require:true
    },

    participant: [subpSchema]
})


module.exports = mongoose.model('participant',participantSchema)