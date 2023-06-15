require("dotenv").config();
const User = require("./models/User")
const connectDB = require("./config/db")

connectDB();

const express = require("express");
const app = express();
app.use(express.json());


const {
    createUser,
    getUsers
} = require("./controllers/userController");


app.post("/api/user", createUser);
app.get("/api/users", getUsers);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
});
