const ToDoModel = require('../models/todoModel')

module.exports.getToDo = async (req,res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req,res)=>{
    const text = req.body
    const title = text.title
    const description = text.description

    ToDoModel
    .create({title:title,description:description})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async (req,res)=>{
    const {_id,title,description} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{title:title,description:description})
    .then(()=>res.send("Updated Successfully"))
    .catch((error)=>console.log(error))

}

module.exports.deleteToDo = async (req,res)=>{
    const {_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((error)=>console.log(error))

}
