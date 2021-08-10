const todoServices = require("../models/todoSchema");
const Joi = require("joi")

const post = async (req, res) => {
    const Schema = Joi.object({
        text: Joi.string().required(),
        assignedTo: Joi.string().required(),
        dueDate: Joi.string().required()
    });

    let validateSchema = Schema.validate(req.body);

    if (validateSchema.error) {
        return res.status(400).json({
            message: validateSchema.error.message || "Bad Request",
            code: 400
        })
    } else {
        validateSchema = validateSchema.value;
    }
    try {
        const result = await todoServices.findOne({ assignedTo: req.body.assignedTo })
        if (result) {
            return res.send("this user already assigned .")
        } else {
            const result = await todoServices.create(validateSchema)
            return res.status(200).json({ status : "user assigned ..." })
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error "
        })
    }
}

module.exports = { post }