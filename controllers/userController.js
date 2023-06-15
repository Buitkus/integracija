const User = require("../models/User")

// Register new user


const createUser = async(req, res) => {
        if(!req.body.name || !req.body.email || !req.body.password) res.status(404).send("Not Found");
   
   
       const user = new User({
           name: req.body.name,
           email: req.body.email,
           password: req.body.password
       });
   
       const result = await user.save();
       res.status(200).send(result);
}


// Get users

const getUsers = async (req, res) => {
    const result = await User.find();
    res.send(result);
}

module.exports = {
    createUser,
    getUsers
}
