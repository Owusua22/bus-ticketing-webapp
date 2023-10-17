import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, Icon } from "semantic-ui-react";
import "./Testimonial.css"; // Import your CSS file

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      user: "Andrews Asante",
      text: "BusTicketPro made my journey so comfortable and hassle-free. I highly recommend it to everyone!",
    },
    {
      id: 2,
      user: "Gloria Odoom",
      text: "I've been using BusTicketPro for a while now, and it's always a great experience. Easy booking and friendly staff.",
    },
    {
      id: 3,
      user: "Yaa Yeboah",
      text: "The best bus ticket booking platform I've ever used. Prompt service and great discounts.",
    },
    {
      id: 4,
      user: "Uriel Opata",
      text: "Efficient and reliable service. Makes traveling a breeze.",
    },
    {
      id: 5,
      user: "Konadu Vasty",
      text: "BusTicketPro has become my go-to for all my journeys.",
    },
    {
      id: 6,
      user: "Kusi Janet",
      text: "I've been using BusTicketPro for years, never disappointed.",
    },
    {
      id: 7,
      user: "Abimael Adjatey",
      text: "Excellent service and comfortable rides. Highly recommended!",
    },
  ];

  return (
    <div className="testimonial-container">
      <h1 style={{textAlign:"center"}}>What our Clients are Saying</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000} // Change slide interval (5 seconds in this example)
        transitionTime={500} // Slide transition time (0.5 seconds in this example)
        dynamicHeight={true}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            
            <Grid container stackable textAlign="center" verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={16}>
                  <Icon name="user" size="huge" color="orange" />
                  <h3 className="testimonial-text">{testimonial.text}</h3>
                  <h3 className="testimonial-user">{testimonial.user}</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TestimonialSection;
