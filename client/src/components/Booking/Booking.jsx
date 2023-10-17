import  { useState, useEffect } from "react";
import { Spin, Button } from "antd";
import { deleteBooking, updateBooking, initiatePayment, getAllBookings } from "../../api"; 

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const data = await getAllBookings();
      setBookings(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      setLoading(false);
    }
  };

  const handleUpdate = async (bookingId) => {
    try {
      await updateBooking(bookingId, {}); 
      fetchBookings();
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      fetchBookings();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handlePayment = async (bookingId) => {
    try {
      await initiatePayment(bookingId);
      fetchBookings();
    } catch (error) {
      console.error("Error making payment for booking:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="booking-container">
      <h2>Your Bookings</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <div>
          {bookings.length > 0 && (
            <div>
              <p>
                <strong>Pickup Point:</strong> {bookings[0].pickupPoint}
              </p>
              <p>
                <strong>Destination:</strong> {bookings[0].destination}
              </p>
              <p>
                <strong>Time:</strong> {bookings[0].time}
              </p>
              <p>
                <strong>Date:</strong> {bookings[0].bookingDate}
              </p>
              <Button type="primary" onClick={() => handleUpdate(bookings[0].id)}>
                Update
              </Button>
              <Button type="danger" onClick={() => handleDelete(bookings[0].id)}>
                Delete
              </Button>
              <Button type="default" onClick={() => handlePayment(bookings[0].id)}>
                Pay
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Bookings;
