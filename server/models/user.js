const mongoose = require('mongoose');

const UserModel = new mongoose.Schema( {
  name: "string",
  email: {
    type: "string",
    trim: true, //tna7iii space
    unique: true,
  },
  password: "string",
  role: "string",
},
  {
  timestamps:true
  },
);

module.exports =  mongoose.model('users', UserModel);
