var mongoose = require('mongoose');

var plantSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model('Plant', plantSchema);
