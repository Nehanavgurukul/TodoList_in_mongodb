const MyCollection = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const { createToken } = require("../middlewares/createToken")

const login = async (req, res) => {
    let user = await MyCollection.findOne({ email: req.body.email })
    if (user) {
        let comparePass = await bcrypt.compare(req.body.password, user.password)
        if (comparePass === false) {
            console.log("Your password wrong..")
            return res.status(404).json({ message: "Your password wrong.." })
        } else if (comparePass) {
            let data = { email: user.email }
            const token = await createToken(data);
            console.log("Your login successfully..");
            console.log(token);
            return res.status(200).json({ message: "Your login successfully", token: token })
        }
    } else {
        return res.status(404).json({ message: "Invalid User" })
    }
}
module.exports = { login }