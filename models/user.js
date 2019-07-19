const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  age: {type: Number},
  gender: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
