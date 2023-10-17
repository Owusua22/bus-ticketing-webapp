const Booking = require("../models/bookingModel");

// Create a new booking

  exports.createBooking = async (req, res) => {
    console.log('Received a request to create a booking');
  try {
    const { pickupPoint, destination, time, bookingDate, seatType , numberOfPeople} = req.body;

    const booking = new Booking({
      pickupPoint,
      destination,
      time,
      bookingDate,
      seatType,
      numberOfPeople
    });

    await booking.save();

    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating booking" });
  }
};

// Update an existing booking by ID
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { pickupPoint, destination, time, bookingDate } = req.body;

    // Find the booking by ID and update its fields
    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        pickupPoint,
        destination,
        time,
        bookingDate,
      },
      { new: true } // Return the updated booking
    );

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", booking });
  } catch (error) {
    res.status(500).json({ error: "Error updating booking" });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
};



// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting booking" });
  }
};
