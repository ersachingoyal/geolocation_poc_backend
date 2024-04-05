const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  // Define schema fields here
  lattitude: String,
  longitude: String,
  country: String,
  state: String,
  city: String,
  postalCode: String,
  zone: String,
  ipAddress: String
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
