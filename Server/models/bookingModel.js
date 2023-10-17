const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  pickupPoint: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  seatType: {
    type: String,
    required: true,
  },
  numberOfPeople: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
