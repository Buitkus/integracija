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


const getUserByName = async (req, res) => {
    const result = await User.find({name: req.body.name});
    res.send(result);
}


const getUserById = async (req, res) => {
    const result = await User.find({_id: req.params.id});
    res.send(result);
}



// updateuser

const updateUser = async(req, res) => {
   const result = await User.updateOne({
       _id: req.params.id}, {
           $set: {
             name: req.body.name,
             password: req.body.password
           }
       })

       res.send(result);
}


const removeUser = async (req, res) => {
    const result = await User.deleteOne({_id: req.params.id});
    res.send(result);
}





module.exports = {
    createUser,
    getUsers,
    getUserByName,
    getUserById,
    updateUser,
    removeUser
}
