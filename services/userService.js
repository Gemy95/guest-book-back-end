const userModel = require('../models/user');
const Joi = require('joi');
const validations = require('../helpers/userValidation').validations;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


module.exports.registerUser = async (userObj) => {
    try {

        const { error } = validations.validateUser().validate(userObj);
        if (error) throw error;

        await userModel.create(userObj);
    }
    catch (error) {
        throw error;
    }
}


module.exports.loginUser = async (userObj) => {
    try {

        let user = (await userModel.find({ email: userObj.email }).limit(1).exec())[0];
        if (!user) {
            throw new Error("user not found");
        }
        else {
            let checkPassword = await bcrypt.compare(userObj.password, user.password);
            if (checkPassword) {
                let token = jwt.sign({ "_id": user._id }, process.env.JWT_KEY || "ALI_G@mal95880!@#%$^&*");
                //delete user.password;
                //delete user.__v;
                return {
                    "token": token,
                    "user": {"fname":user.fname,"lname":user.lname,"email":user.email,"phoneNumber":user.phoneNumber,"age":user.aga}
                }
            }
            else {
                throw new Error("wrong password");
            }
        }

    }
    catch (error) {
        throw error;
    }
}