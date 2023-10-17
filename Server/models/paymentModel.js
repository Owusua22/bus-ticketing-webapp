// Payment.js

const mongoose = require('mongoose');

// Define the payment schema
const paymentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
 
  paymentMethod: {
    type: String
    
  },
  
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
