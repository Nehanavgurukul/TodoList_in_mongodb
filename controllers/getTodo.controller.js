const TodoServices = require("../models/todoSchema");
const usersServices = require("../models/userSchema");

const getTodo = async (req, res) => {
    const result = await TodoServices.findOne({ assignedTo: req.body.assignedTo }, { "_id": 0, "password": 0, "__v": 0 })
        .populate({ path: "assignedTo" })
    try {
        if (result) {
            let result1 = await usersServices.findOne({ cityId: result.assignedTo.cityId }, { "password": 0, "__v": 0 }).populate({ path: "cityId" })
            result.assignedTo = result1
            // console.log(result)
            return res.status(200).json({ todo: result })
        } else {
            res.status(404).json({ message: "this assignedTo is  not Exists." })
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

module.exports = { getTodo }


