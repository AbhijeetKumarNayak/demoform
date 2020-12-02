
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, 'Please tell us your firstname!']
  },
  lname: {
    type: String,
    required: [true, 'Please tell us your lastname!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true
  },
  phone:{
    type: Number,
    required: [true, 'Please provide your phonenumber'],
    unique: true,
    lowercase: true
  },
  image:{
      type: String,
      required: [true, 'Please provide your photo']
  }
});



const User = mongoose.model('User', userSchema);

module.exports = User;
