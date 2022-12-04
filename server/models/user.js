const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true, minlength: 5, maxlength: 50 },
  password: { type: String, required: true, minlength: 5, maxlength: 1024 },
  phoneNumber: Number,
  adress: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
  },
});

const User = mongoose.model('User', userSchema);
export default User;
