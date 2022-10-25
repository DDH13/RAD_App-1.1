const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
    eventName:{
        type:String,
        require:true
    },

    participant: new mongoose.Schema({
        name:{
          type:String,
          require:true},
        email:{
          type:String,
          require:false}


    })
})

module.exports = mongoose.model('task',participantSchema)
