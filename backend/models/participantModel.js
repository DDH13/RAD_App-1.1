const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
    eventName:{
        type:String,
        require:true
    },

    participant: [subpSchema]
})
const subpSchema = Schema({
    name:String,
    email:String
})

module.exports = mongoose.model('participant',participantSchema)
