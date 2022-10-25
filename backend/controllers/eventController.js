const EventModel = require('../models/eventModel')

module.exports.getEvent = async (req,res)=>{
    const Event = await EventModel.find()
    res.status(200).json(Event)
}

module.exports.saveEvent = async (req,res)=>{
    const data = req.body
    const n = data.name
    const d = data.date
    const c = data.club
    
    EventModel
    .create({name:n,date:d,club:c})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateEvent = async (req,res)=>{
    const {_id,date, club} = req.body
    EventModel
    .findByIdAndUpdate(_id,{date:date,club:club})
    .then(()=>res.send("Updated Successfully"))
    .catch((error)=>console.log(error))

}


module.exports.deleteEvent = async (req,res)=>{
    const {_id} = req.body
    EventModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((error)=>console.log(error))

}
