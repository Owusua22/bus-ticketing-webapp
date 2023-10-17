const express = require("express");
const router = express.Router();
const bookingController = require("../controller/bookingController");

// Create a new booking
router.post("/bookings", bookingController.createBooking);

// Update an existing booking by ID
router.put("/bookings/:id", bookingController.updateBooking);

// Get all bookings
router.get("/bookings", bookingController.getAllBookings);

// Delete a booking by ID
router.delete("/bookings/:id", bookingController.deleteBooking);

module.exports = router;
