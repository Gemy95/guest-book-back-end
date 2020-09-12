const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const posts

let userSchema = mongoose.Schema({
   // _id: { type: mongoose.Schema.Types.ObjectId },
    fname: { type: String },
    lname: { type: String },
    email: { type: String ,unique: true},
    password: { type: String },
    phoneNumber: { type: String },
    age: { type: String },
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:"posts"}]
});

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });
// need validation
/*
studentSchema.statics.findAllStudents = function () {
    return new Promise((resolve, reject) => {
        this.find({}).then((data) => {
            resolve(data);
        }).catch((err) => {
            reject(err);
        })

    })
};
*/
let userModel=mongoose.model("users", userSchema);


module.exports = userModel;