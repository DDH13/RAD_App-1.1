const userModel = require('../models/userModel')

module.exports.getuser = async (req,res)=>{
    const p= req.body.password
    const u = req.body.username
    
    const user = await userModel.find()
    res.status(200).json(user);
}

module.exports.saveuser = async (req,res)=>{
    const text = req.body
    const username = text.username
    const password = text.password

    userModel
    .create({username:username,password:password})
    .then((data)=>{
        console.log("Added successfully");
        console.log(data);
        res.send(data)
    })
}
