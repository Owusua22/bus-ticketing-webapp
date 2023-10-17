import PropTypes from 'prop-types';

const Receipt = ({ userName, userContact, amountPaid, departureDateTime, pickupPoint, destination, seatType, numberOfPeople }) => {
  return (
    <div className="receipt">
      <h2 style={{color:"orange", textAlign:"center", textDecoration:"underline"}}>Ticket</h2>
      <div>
        <strong>Name:</strong> {userName}
      </div>
      <div>
        <strong>Contact:</strong> {userContact}
      </div>
      <div>
        <strong>Departure Date & Time:</strong> {departureDateTime}
      </div>
      <div>
        <strong>Pickup Point:</strong> {pickupPoint}
      </div>
      <div>
        <strong>Destination:</strong> {destination}
      </div>
      <div>
        <strong>Seat Type:</strong> {seatType}
      </div>
      <div>
        <strong>Number of People:</strong> {numberOfPeople}
      </div>

      <div>
        <strong>Amount Paid:</strong> Ghc {amountPaid}.00
      </div>
    </div>
  );
}

Receipt.propTypes = {
    userName: PropTypes.string.isRequired,
    userContact: PropTypes.string.isRequired,
    amountPaid: PropTypes.number.isRequired,
    departureDateTime: PropTypes.string.isRequired,
    pickupPoint: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    seatType: PropTypes.string.isRequired,
    numberOfPeople: PropTypes.string.isRequired,
};

export default Receipt;
