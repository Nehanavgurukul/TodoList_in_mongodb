const mongoose = require("mongoose");
require("../database/connectionDB");

const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true,
        unique: true
    }
    // ,
    // userId : {
    //     type: mongoose.Schema.Types.ObjectId, ref: "login-sign-ups"
    // }
})

module.exports = new mongoose.model("cities", citySchema);
