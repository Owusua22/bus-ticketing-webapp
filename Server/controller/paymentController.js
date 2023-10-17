const Paystack = require("paystack-node");
const config = require("../config");
const paystack = new Paystack(config.paystackSecretKey);
const Payment = require('../models/paymentModel'); // Import your Payment model


// Controller function to initiate a payment
exports.initiatePayment = async (req, res) => {
  try {
    const { amount, email } = req.body;

    // Save payment data to the database
    const payment = new Payment({
      email,
      amount: amount * 100, // Amount in kobo (100 kobo = 1 Naira)
      status: 'success', // You can set an initial status as "success"
    });
    await payment.save();

    // Respond with a success message
    res.json({ message: 'Payment initiation successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
