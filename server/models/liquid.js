const mongoose = require('mongoose');

const liquidSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  description:{ type: String },
  image:{ type: String },

});


const Liquid = mongoose.model('Liquid',liquidSchema)
module.exports = Liquid;
