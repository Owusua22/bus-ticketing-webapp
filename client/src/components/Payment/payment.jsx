
import { useState } from "react";
import { initiatePayment } from "../../api";
import { message, Button, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Navbar from "../Navbar/Navbar";
import { Icon } from "semantic-ui-react";

import "./payment.css";

const PaymentComponent = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [mobileMoneyNetwork, setMobileMoneyNetwork] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cardDetails, setCardDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [processingText, setProcessingText] = useState("");
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handlePayment = async () => {
    try {
      if (!email || !amount || !paymentMethod) {
        message.error("All fields are required!!!");
        return;
      }

      if (paymentMethod === "mobileMoney") {
        if (!mobileMoneyNetwork) {
          message.error("Please select a mobile money network.");
          return;
        }

        if (!mobileNumber) {
          message.error("Please enter your mobile money number.");
          return;
        }
      }

      if (paymentMethod === "creditCard") {
        if (!cardDetails) {
          message.error("Please enter your card details.");
          return;
        }
      }

      setLoading(true);
      setProcessingText("Processing Payment...");
      showModal(); // Show the modal

      const response = await initiatePayment({
        email,
        amount: parseFloat(amount),
        paymentMethod,
        mobileMoneyNetwork,
        mobileNumber,
        cardDetails,
      });

      setTimeout(() => {
        hideModal(); // Hide the modal
        setLoading(false);
        setProcessingText("");
        message.success(response.message);
        navigate("/confirmation");
      }, 10000);
    } catch (error) {
      hideModal(); // Hide the modal
      setLoading(false);
      setProcessingText("");

      message.error("Payment initiation failed. Please try again.");
      console.error("Error initiating payment:", error);
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="payment-container">
    
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Check
              type="radio"
              label={
                <div>
                  Credit Card <Icon name="credit card" color="orange" />
                </div>
              }
              id="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={() => setPaymentMethod("creditCard")}
              className="rado"
            />
            <Form.Check
              type="radio"
              label={
                <div>
                  Mobile Money <Icon name="mobile" color="orange" />
                </div>
              }
              id="mobileMoney"
              checked={paymentMethod === "mobileMoney"}
              onChange={() => setPaymentMethod("mobileMoney")}
              className="rado"
            />
          </Form.Group>
          {paymentMethod === "mobileMoney" && (
            <div>
              <Form.Group className="mb-3">
                <Form.Label>Select Mobile Money Network</Form.Label>
                <Form.Select
                  value={mobileMoneyNetwork}
                  onChange={(e) => setMobileMoneyNetwork(e.target.value)}
                  style={{ borderRadius: "15px", border: "1px solid orange" }}
                >
                  <option value="">Select a network</option>
                  <option value="MTN">MTN</option>
                  <option value="Vodafone">Vodafone</option>
                  <option value="AirtelTigo">AirtelTigo</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" style={{ marginTop: "15px" }}>
                <Form.Label>Mobile Money Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter mobile money number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Form.Group>
            </div>
          )}
          {paymentMethod === "creditCard" && (
            <Form.Group className="mb-3">
              <Form.Label>Card Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your card details"
                value={cardDetails}
                onChange={(e) => setCardDetails(e.target.value)}
              />
            </Form.Group>
          )}
          <Button type="primary" onClick={handlePayment} style={{marginLeft:"95px", width:"80px"}}>
            Pay Now
          </Button>
        </Form>

      
      <Modal
        title="Completing Transaction"
        visible={modalVisible}
        onCancel={hideModal}
        footer={null}
      >
        {loading && (
              <div className="spinner-container">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 55 }} spin />} style={{ marginTop: '-40px', color: "orange" }} />
                <p style={{ marginTop: "10px", fontWeight: "bold", fontSize: "20px", color: "yellowgreen" }}>{processingText}</p>
              </div>
            )}
      </Modal>
        
    </div>
    </div>
    </div>
  );
};

export default PaymentComponent;





          