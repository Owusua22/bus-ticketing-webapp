
import EmailSubscription from "../EmailSubscription/EmailSubscription"
import Footer from "../Footer/Footer"
import GuaranteeSection from "../Guarantee/Guarantee"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import OfferSection from "../Offers/Offers"
import TestimonialSection from "../Testimonial/Testimonial"


function Home() {
  return (
    <div>
    
      <Navbar/>
   
      <Header/>
      <Hero/>
      <OfferSection/>
      <GuaranteeSection/>
      <TestimonialSection/>
      
      <EmailSubscription/>
      <Footer/>
    </div>
  )
}

export default Home
