const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  nameVal: {
    type: String
  },
  surname: {
    type: String
  },
  branch: {
    type: String
  },
  ucid: {
    type: Number
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  terms: {
    type: Boolean
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);