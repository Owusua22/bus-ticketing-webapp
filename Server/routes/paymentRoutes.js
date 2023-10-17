const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');

// Initiate a payment
router.post('/initiate', paymentController.initiatePayment);


module.exports = router;
