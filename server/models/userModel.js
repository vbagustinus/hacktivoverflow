const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email :String,
  gender: String,
  picture: String
});

module.exports = mongoose.model('User', userSchema);
