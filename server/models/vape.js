const mongoose = require('mongoose');
const vapeSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description:{ type: String },
    image:{ type: String },
  
  });

const Vape = mongoose.model('Vape', vapeSchema);
module.exports = Vape;