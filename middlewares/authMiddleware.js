const jwt = require('jsonwebtoken');

module.exports.checkToken = (req,res,next) =>{
let PRIVATE_KEY =  process.env.JWT_KEY || "ALI_G@mal95880!@#%$^&*";
let token = req.get("token") || req.query.token ;

  if (token)
  {
   jwt.verify(token,PRIVATE_KEY,function(error,data) {
       if (error) 
       res.status(401).json("unAuthorized User");
       else
       next();
   })
  }
  else
  {
    res.status(401).json("please send a token!");
  }
}