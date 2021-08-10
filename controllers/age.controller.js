const usersServices = require("../models/userSchema");

const get = async (req, res) => {

    // let agemorethen =  (req.query.ageMorethen || {})
    try {
        if (req.query.ageMoreThan) {
            //let agemorethen =  (req.query.ageMorethen || {})
            const result = await usersServices.find({ age: { $gt: req.query.ageMoreThan } }, { "password": 0, "__v": 0 })
                .populate({ path: "cityId" })
            return res.status(200).json({
                users: result
            });
        } else if (req.query.ageMoreThan && req.query.cityId) {
            const result = await usersServices.find({ age: { $gt: req.query.ageMoreThan } }, { "password": 0, "__v": 0 })
                .populate({ path: "cityId" })
            return res.status(200).json({
                users: result
            });
        } else if (req.query.ageLessThan) {
            const result = await usersServices.find({ age: { $lt: req.query.ageLessThan } }, { "password": 0, "__v": 0 })
                .populate({ path: "cityId" })
            return res.status(200).json({
                users: result
            });
        } else if (!req.query.cityId) {
            const result = await usersServices.find({}, { "password": 0, "__v": 0 })
                .populate({ path: " cityId" })
            return res.status(200).json({
                users: result
            });
        }
    } catch (err) {
        console.log(err, 'Internal Server Error')
        return res.status(500).json({
            message: 'Internal Server Error',
            status: 500
        })
    }
}

module.exports = { get }
