const mongoose = require("mongoose");
require("../database/connectionDB");

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        lowercase: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId, ref: "login-sign-ups"
    },
    dueDate: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("todoAssigned", TodoSchema);
