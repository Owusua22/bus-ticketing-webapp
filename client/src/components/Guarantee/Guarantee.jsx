import { Grid, Icon } from "semantic-ui-react";
import "./Guarantee.css"; // Import your CSS file

function GuaranteeSection() {
  return (
    <div className="guarantee-container">
      <Grid container stackable textAlign="center">
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="g">
              <h3 style={{ textTransform: "uppercase", color:"orange" }}>
                Introducing <br /> On-time Guarantee
              </h3>
              <p style={{ color: "white" }}>Leave on time, everytime</p>
              <p>Look for buses with</p>
             
                <p style={{ color: "white" }}>On-time Guarantee tag</p>
              
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="guarantee-box">
              <Icon name="shield alternate" size="large" color="blue" />
              <h3>Security Guarantee</h3>
              <p>Your payment and personal data are secure with us.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="guarantee-box">
              <Icon name="thumbs up" size="large" color="green" />
              <h3>Satisfaction Guaranteed</h3>
              <p>We guarantee your satisfaction with our services.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="guarantee-box">
              <Icon name="clock" size="large" color="orange" />
              <h3>On-Time Departures</h3>
              <p>Count on us for punctual bus departures.</p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={3}>
            <div className="guarantee-box">
              <Icon name="star" size="large" color="yellow" />
              <h3> Customer Service</h3>
              <p>We provide top-notch customer service.</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default GuaranteeSection;
