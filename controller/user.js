const userModel = require("../model/user");
const jwt = require("jsonwebtoken");


// to create a new user
exports.createUser = async (req, res,next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return next({ message: " required all filed ",statuscode:404 })
    }
    try {
        const userExist = await userModel.findOne({ email: email })
        if (userExist) {
            return next({ message:" email already exist "})
        }
        const user = new userModel({ username, email, password })
        const userRegister = await user.save()
        if (userRegister) {
            res.status(201).send({ message: "user Registerd Successfully", data: userRegister })
        }
    }
    catch (err) {
        res.send({ err })
    }
}
exports.login = async (req, res,next) => {
    try {
        const email = req.body.email;
        const user = await userModel.findOne({ email: email });
        if (!user) { return res.status(404).send({ status: false, msg: "Incorrect Email" }) }
        let userId = user._id
        let token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, { expiresIn: "2d" })
        res.status(200).send({ status: true, message: "User login successfull", data: { userId, token: token,role:user.role } });
    } catch (err) {
        next(err)
       // res.status(500).send({ status: false, message: err.message });
    }
}

// to get all user data
exports.getAlluser = async(req, res,next) => {
   // const userAccessed= req.userLoggedIn[0];
    try{
        const users = await userModel.find();
        res.status(201).send({ status: true, });
    }catch(err){
        next(err)
       // res.status(500).json({err});
    }
}
// to get specific user data

exports.getUser = async(req, res,next) => {
    try{
        const user = await userModel.find({_id:req.params.userID});
        res.status(201).json(user);
    }catch(err){
        next(err)
        //res.status(5000).json({err});
    }

}
// delete db
exports.deleteUser = (req, res,next) => {
    userModel.findOneAndDelete({_id:req.params.userID},(err,data) => {
        if(err){
            next(err)
           // res.json({err});
        }
        else{
            res.json(data);
        }
    })  

}

// Update the user
exports.updateUser = (req, res,next) => {
    userModel.findOneAndUpdate({_id:req.params.userID}, req.body, {new:true},
         (err, data) => {
             if(err){
                next(err)
                // res.json({err});
             }
             else{
                 res.json(data);
             }
         }
    )

}

