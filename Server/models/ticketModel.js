const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  busType: {
    type: String,
    required: true,
  },
  departureLocation: {
    type: String,
    required: true,
  },
  arrivalLocation: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  passengerName: {
    type: String,
    required: true,
  },
  
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Booked', 'Cancelled'],
    default: 'Booked',
  },
});

module.exports = mongoose.model('Ticket', ticketSchema);
