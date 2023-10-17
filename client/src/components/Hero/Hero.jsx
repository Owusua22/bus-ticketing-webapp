import pic from "../../assets/bus.jpg";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./Hero.css"; // Import your CSS file

function Hero() {
  return (
    <div className="hero-container">
      <Grid container stackable textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h1">
              Welcome to <span className="highlight-text">BusTicketPro</span>
            </Header>
            <p className="catch-phrase">
              Your Journey Starts Here! Book Your Travels with us.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="counter">
              <Icon name="users" size="huge" color="blue" />
              <p>5,000+</p>
              <h3 style={{color:"#f39c12"}}>Happy Customers</h3>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="counter">
              <Icon name="ticket" size="huge" color="green" />
              <p>10,000+</p>
              <h3 style={{color:"#f39c12"}}>Tickets Sold</h3>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="counter">
              <Icon name="tasks" size="huge" color="blue" />
              <p>500+</p>
              <h3 style={{color:"#f39c12"}} >Operations Completed</h3>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <img
              src={pic} // Add the path to your bus image
              size="medium"
              alt="bus"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Hero;
