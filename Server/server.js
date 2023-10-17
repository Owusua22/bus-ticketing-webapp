const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ticketRoutes = require("./routes/ticketRoutes");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const config = require("./config");
const bookingRoutes = require("./routes/bookingRoutes");
const cors = require('cors');
const app = express();

// Connect to the MongoDB database
mongoose
  .connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`);
  });

  
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/bookings", bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
