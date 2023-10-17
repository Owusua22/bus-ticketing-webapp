import pic from "../../assets/award.jpg"
import "./Awards.css"; // Import your CSS file

function AwardSection() {
  return (
    <div className="award-container">
      <h2 className="award-heading">Our Awards</h2>
      <div className="award-list">
        <div className="award">
          <img
            src={pic} // Replace with your award image URL
            alt="Award 1"
            className="award-image"
          />
          <p className="award-description">Best Bus Service 2021</p>
        </div>
        <div className="award">
          <img
            src={pic} // Replace with your award image URL
            alt="Award 2"
            className="award-image"
          />
          <p className="award-description">Customer Choice Award 2022</p>
        </div>
        <div className="award">
          <img
            src={pic} // Replace with your award image URL
            alt="Award 3"
            className="award-image"
          />
          <p className="award-description">Top Transport Company</p>
        </div>
        <div className="award">
          <img
            src={pic} // Replace with your award image URL
            alt="Award 4"
            className="award-image"
          />
          <p className="award-description">Excellence in Service</p>
        </div>
      </div>
    </div>
  );
}

export default AwardSection;
