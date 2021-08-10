const TodosServices = require("../models/todoSchema");
const usersServices = require("../models/userSchema");

const getTodos = async (req, res) => {
    const result = await TodosServices.find({}, { "_id": 0, "password": 0, "__v": 0 })
        .populate({ path: "assignedTo" })
    console.log(result)
    try {
        if (result) {
            return res.status(200).json({ todos: result })
        }
    }
    catch (err) {
        console.log(err, 'Internal Server Error')
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}

module.exports = { getTodos }
