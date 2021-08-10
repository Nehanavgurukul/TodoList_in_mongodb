const Users = require("../models/userSchema")


const getCities = async (req, res) => {
    const result = await Users.findOne({ cityId: req.body.cityId }, { "password": 0 , "__v" :0})
        .populate({ path: 'cityId' })
    try {
        if (result) {
            console.log(result)
            return res.status(200).json({ result })
        } else {
            res.status(404).json({ message: "this cityId not Exists." })
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


module.exports = { getCities }