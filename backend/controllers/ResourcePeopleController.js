const ResourcePeopleModel = require('../models/ResourcePeopleModel')

module.exports.getResourcePeople = async (req,res)=>{
    const ResourcePeople = await ResourcePeopleModel.find()
    res.status(200).json(ResourcePeople);
}

module.exports.saveResourcePeople = async (req,res)=>{
    const text = req.body
    const profession = text.profession
    const contactNo = text.contactNo
    const company = text.company
    const name = text.name
    const email = text.email

    ResourcePeopleModel
    .create({profession:profession,contactNo:contactNo,company:company,name:name,email:email})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateResourcePeople = async (req,res)=>{
    const {_id,profession,contactNo,company,name,email} = req.body
    ResourcePeopleModel
    .findByIdAndUpdate(_id,{profession:profession,contactNo:contactNo,company:company,name:name,email:email})
    .then(()=>res.send("Updated Successfully"))
    .catch((error)=>console.log(error))

}

module.exports.deleteResourcePeople = async (req,res)=>{
    const {_id} = req.body
    ResourcePeopleModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((error)=>console.log(error))

}
