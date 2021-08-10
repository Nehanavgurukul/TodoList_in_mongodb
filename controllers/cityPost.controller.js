const Cities = require("../models/City.model");
const Joi = require("joi");
const mongoose = require("mongoose");


const post = async (req, res) => {
    const Schema = Joi.object({
        cityName: Joi.string().required()
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
        const existsCity = await Cities.findOne({cityName : req.body.cityName})
        if(existsCity){
            console.log("Already Exists city name ...")
            return res.status(200).json({
                status: "Already Exists city name..."
            });
        }else{
            const result = await Cities.create(validateSchema)
            console.log("New City added successfully....")
            return res.status(200).json({
                status: "New City added successfully...."
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


module.exports = { post }