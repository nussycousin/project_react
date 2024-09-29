const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    email: {type: String, unique: true},
    phone: {type: Number, unique: true},
    adress: String,
    role :{
        type: String,
        default: "user"
    }
}, {timestamps: true})

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel