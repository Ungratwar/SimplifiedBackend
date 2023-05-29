const roleModel = require("../model/role");


exports.createUser = async(req, res) => {
    try{
        const savedData = await new roleModel(req.body).save();
        res.json(savedData);
    }
    catch(err){
        res.send({err})
    }

}


exports.getAlluser = async(req, res) => {
    try{
        const roles = await roleModel.find();
        res.status(201).json(roles);

    }catch(err){
        res.status(5000).json({err});

    }

}