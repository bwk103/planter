
var hash_password = (password) => {
  let salt = bcrypt.genSaltSync();
  let hash = bcrypt.hashSync( password, salt);
  return hash;
}

module.exports = hash_password;
