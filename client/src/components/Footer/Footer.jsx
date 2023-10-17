
import { Grid, Icon, List } from "semantic-ui-react";
import "./Footer.css"; // Import your CSS file

function Footer() {
  return (
    <div className="footer-container">
      <Grid container stackable textAlign="center">
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h3>Contact Us</h3>
            <p>
              <Icon name="map marker alternate" /> 123 Main St,Nsawam
            </p>
            <p>
              <Icon name="phone" /> +233-549-455-367
            </p>
            <p>
              <Icon name="mail" /> busticketpro@gmail.com
            </p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h3>Quick Links</h3>
            <List>
              <List.Item>
                <a href="/">Home</a>
              </List.Item>
              <List.Item>
                <a href="/about">About Us</a>
              </List.Item>
              <List.Item>
                <a href="/services">Services</a>
              </List.Item>
              <List.Item>
                <a href="/contact">Contact</a>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media:</p>
            <Icon name="facebook" size="big" />
            <Icon name="twitter" size="big" />
            <Icon name="linkedin" size="big" />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates.</p>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="footer-bottom">
        <p>&copy; 2023 BusTicketPro. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
