var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  location: String,
  garden: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plant"
    }
  ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
