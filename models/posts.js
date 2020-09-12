const mongoose = require("mongoose");

let postSchema = mongoose.Schema({
   // _id: { type: mongoose.Schema.Types.ObjectId },
    createAt: { type: String },
    subject: { type: String },
    content: { type: String },
    //courses:[{type:mongoose.Schema.Types.ObjectId,ref:"courses"}]
});

let postModel=mongoose.model("posts", postSchema);


module.exports = postModel;