import  { useState } from "react";
import "./EmailSubscription.css"; // Import your CSS file

function EmailSubscription() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the subscription (e.g., send email to server)
    setSubscribed(true);
  };

  return (
    <div className="subscription-container">
      <h2 className="subscription-heading">Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="subscription-success">
          Thank you for subscribing! You will receive our latest updates in your inbox.
        </p>
      ) : (
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="subscription-button" style={{backgroundColor:"orange"}}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

export default EmailSubscription;
