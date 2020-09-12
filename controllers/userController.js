const userService = require('../services/userService');

module.exports.registerUser = async (req, res) => {
    try {
        await userService.registerUser(req.body);
        res.status(200).send({
            "message": "user created successfully"
        })
    }
    catch (error) {
        console.log("user error=" + error)
        res.status(400).send({
            "message": error.message
        })
    }
}


module.exports.loginUser = async (req, res) => {
    try {
       let data= await userService.loginUser(req.body);
        res.status(200).send({
            "message": "user login successfully",
            "data": data
        })
    }
    catch (error) {
        console.log("user error=" + error)
        res.status(400).send({
            "message": error.message
        })
    }
}