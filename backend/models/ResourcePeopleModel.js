const mongoose = require('mongoose')

const ResourcePeopleSchema = new mongoose.Schema({
    profession:{
        type:String,
        require:true
    },
    contactNo:{
        type:String,
        require: true
    },
    company:{
        type:String,
        require: false
    },
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    }
})

module.exports = mongoose.model('resourcePerson',ResourcePeopleSchema)
