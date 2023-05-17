
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = async (req,res) => {
    const email = req.body.email
    const findUser = await User.find({ email: email });
    if(!findUser){
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
       throw new Error("User Already Exists");  
    }
};
module.exports={ createUser };