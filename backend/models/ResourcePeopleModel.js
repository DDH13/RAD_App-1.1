const mongoose = require('mongoose')

const ResourcePeopleSchema = new mongoose.Schema({
    profession:{
        type:String,
        require:false
    },
    contactNo:{
        type:String,
        require: true
    },
    company:{
        type:String,
        require: true
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