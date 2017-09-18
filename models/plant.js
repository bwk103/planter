var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
  name: String,
  image: String,
  type: String,
  height: Number,
  width: Number,
  colour: String,
  description: String
});

module.exports = mongoose.model('Plant', plantSchema);
