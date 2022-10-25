const ParticipantModel = require('../models/participantModel')

module.exports.getParticipant = async (req,res)=>{
    const participant = await ParticipantModel.find()
    res.status(200).json(participant);
}

module.exports.saveParticipant = async (req,res)=>{
    const text = req.body
    const eventName = text.eventName
    const participant = text.participant

    ParticipantModel
    .create({eventName:eventName,participant:participant})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateParticipant = async (req,res)=>{
    const {_id,eventName,participant} = req.body
    ParticipantModel
    .findByIdAndUpdate(_id,{eventName:eventName,participant:participant})
    .then(()=>res.send("Updated Successfully"))
    .catch((error)=>console.log(error))

}

module.exports.deleteParticipant = async (req,res)=>{
    const {_id} = req.body
    ParticipantModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((error)=>console.log(error))

}
