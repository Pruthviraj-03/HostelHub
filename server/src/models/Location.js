const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  hostels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hostels",
    },
  ],
});

const Locations = mongoose.model("Locations", locationSchema);

module.exports = Locations;
