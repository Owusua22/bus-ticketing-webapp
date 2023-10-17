
import { Grid, Icon } from "semantic-ui-react";
import "./Offers.css"; // Import your CSS file

function OfferSection() {
  return (
    <div className="offer-container">
      <Grid container stackable textAlign="center">
        <h1 style={{color:"#f39c12"}}>What we Offer</h1>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="offer-box">
              <Icon name="ticket" size="large" color="blue" />
              <h3>Special Discounts</h3>
              <p>Get exclusive discounts on bus tickets.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="offer-box">
              <Icon name="check" size="large" color="green" />
              <h3>Easy Booking</h3>
              <p>Book your tickets quickly and hassle-free.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="offer-box">
              <Icon name="wifi" size="large" color="orange" />
              <h3>Free Wi-Fi</h3>
              <p>Enjoy complimentary Wi-Fi during your journey.</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default OfferSection;
