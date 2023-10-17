import { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { message } from "antd";
import { format } from "date-fns";
import { createBooking } from "../../api";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const pickupOptions = [
  { value: "Accra", label: "Accra" },
  { value: "Kumasi", label: "Kumasi" },
  { value: "Cape Coast", label: "Cape Coast" }
  // Add more pickup options as needed
];

const destinationOptions = [
  { value: "Cape Coast", label: "Cape Coast" },
  { value: "Tamale", label: "Tamale" },
  { value: "Kumasi", label: "Kumasi" },
  // Add more destination options as needed
];

const seatTypeOptions = [
  { value: "economy", label: "Economy" },
  { value: "business", label: "Business" },
  // Add more seat type options as needed
];

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Booking Confirmation"
      appElement={document.getElementById("root")} // Use the same app element as set in your main file
      className="modal-content"
    >
      <Typography variant="h4" style={{color:"orange"}}>
        Your Total Bill is Ghc 100.00
      </Typography>
      <Typography variant="h6" color="primary">
        Want to proceed to make payment??
      </Typography>

      <Button
        variant="contained"
        onClick={onConfirm}
        style={{
          backgroundColor: "orange",
          marginRight: "20px",
          cursor: "pointer",
        }}
      >
        Yes
      </Button>
      <Button
        variant="contained"
        onClick={onRequestClose}
        style={{ cursor: "pointer" }}
      >
        No
      </Button>
    </Modal>
  );
};
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

// ... (previous imports and code)

function Header() {
  const navigate = useNavigate();

  const [pickupPoint, setPickupPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [bookingDate, setBookingDate] = useState(new Date());
  const [seatType, setSeatType] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1); // Initialize with 1 person

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const openConfirmationModal = () => {
    setIsConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleConfirmNavigation = () => {
    closeConfirmationModal();
    navigate("/payment");
  };

  const handleDateChange = (date) => {
    setBookingDate(date);
  };

  const handleBookSeat = () => {
    try {
      if (pickupPoint && destination && time && bookingDate && seatType) {
        const bookingData = {
          pickupPoint,
          destination,
          time,
          seatType,
          bookingDate: format(bookingDate, "yyyy-MM-dd"),
          numberOfPeople, // Include the number of people
        };

        // Assuming createBooking returns a success message
        createBooking(bookingData)
          .then(() => {
            openConfirmationModal();
            message.success("Booking successful");

            setPickupPoint("");
            setDestination("");
            setTime("");
            setBookingDate(new Date());
            setSeatType("");
            setNumberOfPeople(1); // Reset the number of people to 1
          })
          .catch((error) => {
            console.error(error);
            message.error("Error booking seat. Please try again later.");
          });
      } else {
        message.error("Please fill in all required fields.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="header-container">
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{ marginTop: "80px", color: "white", fontWeight: "bold" }}
          >
            Schedule Your Travel
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form className="search-form">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="pickup-point">Pickup Point</InputLabel>
                  <Select
                    label="Pickup Point"
                    value={pickupPoint}
                    onChange={(e) => setPickupPoint(e.target.value)}
                  >
                    {pickupOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="destination">Destination</InputLabel>
                  <Select
                    label="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    {destinationOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField
                  fullWidth
                  label="Departure Time"
                  type="time"
                  variant="outlined"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Booking Date"
                  type="date"
                  variant="outlined"
                  value={format(bookingDate, "yyyy-MM-dd")}
                  onChange={(e) => handleDateChange(new Date(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="seat-type">Seat Type</InputLabel>
                  <Select
                    label="Seat Type"
                    value={seatType}
                    onChange={(e) => setSeatType(e.target.value)}
                  >
                    {seatTypeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Number of People"
                  type="number"
                  variant="outlined"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleBookSeat}
                  style={{ backgroundColor: "orange", borderRadius: "20px" }}
                >
                  Book a Seat
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onRequestClose={closeConfirmationModal}
          onConfirm={handleConfirmNavigation}
        />
      </Grid>
    </div>
  );
}

export default Header;
