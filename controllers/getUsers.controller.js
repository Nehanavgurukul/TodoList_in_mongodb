const Users = require("../models/userSchema");

const getUsers = async (req, res) => {
    const result = await Users.find({},{"password" : 0, "__v" : 0})
    if(result.length == 0){
        console.log("No user !")
        return res.status(200).json({
            result: "No user !"
        })
    }else{
        console.log(result)
        return res.status(200).json({
            Users: result
        })
    }
    
}

module.exports = { getUsers };