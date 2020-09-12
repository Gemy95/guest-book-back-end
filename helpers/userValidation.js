const Joi = require('joi');

module.exports.validations = {
validateUser : function (){
   let userSchema = Joi.object({
    fname:Joi.string().required(),
    lname:Joi.string().required(),   
    email:Joi.string().email().required(),
    password : Joi.string().required() ,
    phoneNumber: Joi.string().required() ,
    age: Joi.string().required()
     })
   return userSchema;
  }
}