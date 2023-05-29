const jwt = require("jsonwebtoken");
const userModel = require('../model/user')

exports.authenticate  = async (req,res,next) =>{
    try {
        let token = req.headers["x-api-key"] || req.headers["X-Api-Key"]
        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const userData = await userModel.find({_id:decodedToken.userId})
        if(!decodedToken) return res.status(400).send({status:false,message:"Invalid Token"})
        req.userLoggedIn=userData;
        next()
    } catch (error) {
        res.status(500).send({status:false, message: error.message })
    }
}
 