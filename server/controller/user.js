const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {

const {email,password} = req.body; 
  try {
    await User.findOne({email}).then (async(user) =>{
      if(!user) {
        res.status(404).json({
          message:"Email does not exist ! please Enter the right Email or You can create account"})
        }
        const passwordcom = bcrypt.compare(password,user.password)
        if(!passwordcom){
          res.status(404).json({message:"Wrong Password"})
        }else {
        const token = jwt.sign({ _id: user._id }, 'shhhhh');
        res.status(201).json({token ,message:"welcom to your home page"})
      }
      })
      } catch (err) {
       res.status(404).json({message:"samthing is wrong "})
  }
};

const signup = async (req, res) => {
const {email,password} =req.body
  try {
    await User.findOne({email}).then(async(emailExist) =>{
      if (emailExist){
        res.status(404).json({message:'email already is use '});

      }else{
      const hash = await bcrypt.hash(password, 10)
        await User.create({
          email,
          password:hash
        })
        res.status(201).json({message: "user added with success "})
      }
    })
      } catch (err) {
       res.status(400).json({message:"something is wrong"})
     }
};


const updateUser = async (req, res) => {
  try {
  } catch (err) {}
};
const getUserById = async (req, res) => {
  try {
  } catch (err) {}
};
module.exports = { login, signup, updateUser, getUserById };
