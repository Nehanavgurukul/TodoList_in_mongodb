const usersServices = require("../models/userSchema");

const getUserById = async (req, res) => {
    
    const result = await usersServices.findOne({ "_id" : req.query.userId }, {"password" : 0, "__v" :0})
    // console.log(result)
    try {
        if (result) {
            return res.status(200).json({
                user: result
            })
        } else {
            return res.send("This Id is not there .")
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}

module.exports = { getUserById } 