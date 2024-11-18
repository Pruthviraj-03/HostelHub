const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Hostels = mongoose.model("Hostels", hostelSchema);

module.exports = Hostels;
