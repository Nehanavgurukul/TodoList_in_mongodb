const mongoose = require("mongoose");
require("../database/connectionDB");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    age : {
        type :String,
        required :true
    },
    password : {
        type : String,
        required : true,
        StorageManager :true
    },
    cityId : {
        type: mongoose.Schema.Types.ObjectId, ref: "cities"
    }
})

module.exports = new mongoose.model("login-sign-ups",UserSchema);
