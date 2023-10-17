import { useState, useEffect } from 'react';
import Receipt from './Receipt';
import './PaymentSuccess.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { Icon } from "semantic-ui-react";

const PaymentConfirmation = () => {
  const [userName] = useState('Asante Andrews'); // Replace with actual user data
  const [userContact] = useState('0554671026'); // Replace with actual user data
  const [amountPaid] = useState(100); // Replace with actual payment data
  const [departureDateTime] = useState('2023-10-14 04:30 PM'); // Replace with actual departure date and time
  const [pickupPoint] = useState('Accra'); // Replace with actual pickup point
  const [destination] = useState('Kumasi'); // Replace with actual destination
  const [seatType] = useState('Business');
  const [numberOfPeople] = useState('1'); // Number of people

  const navigate = useNavigate();

  const handleDownload = () => {
    // Create a PDF document
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Ticket', 15, 10);
    doc.setFontSize(12);
    doc.text('Name: ' + userName, 15, 20);
    doc.text('Contact: ' + userContact, 15, 30);
    doc.text('Amount Paid: ' + amountPaid + ' Ghc', 15, 40);
    doc.text('Departure Date & Time: ' + departureDateTime, 15, 50);
    doc.text('Pickup Point: ' + pickupPoint, 15, 60);
    doc.text('Destination: ' + destination, 15, 70);
    doc.text('Seat Type: ' + seatType, 15, 80);
    doc.text('Number of People: ' + numberOfPeople, 15, 90); // Display Number of People
    doc.save('receipt.pdf'); // Save the PDF with the name "receipt.pdf"

    // Set downloadComplete to true
    setDownloadComplete(true);
  };

  // Define downloadComplete state
  const [downloadComplete, setDownloadComplete] = useState(false);

  // Automatically navigate to the home page after downloading
  useEffect(() => {
    if (downloadComplete) {
      navigate('/home');
    }
  }, [downloadComplete, navigate]);

  return (
    <div className="payment-confirmation">
      <VerifiedIcon style={{ color: 'green', fontSize: '50px', marginBottom: "10px" }} />
      <h1 className="confirmation-title">Payment Received Successfully</h1>

      <Receipt
        userName={userName}
        userContact={userContact}
        amountPaid={amountPaid}
        departureDateTime={departureDateTime}
        pickupPoint={pickupPoint}
        destination={destination}
        seatType={seatType}
        numberOfPeople={numberOfPeople} // Pass Number of People as a prop
      />
      <div className='down'>
        <button className="download-button" onClick={handleDownload} style={{ height: "40px", cursor: "pointer",
          backgroundColor: "orange", color: "white", border: "none", borderRadius: "10px", fontWeight: "900" }}>
          <Icon name="download" color="blue" />Download Ticket
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
