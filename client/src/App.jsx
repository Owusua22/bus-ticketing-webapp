import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PaymentComponent from "./components/Payment/payment";
import PaymentConfirmation from "./components/Receipt/PaymentSuccess";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<PaymentComponent/>}/>
        <Route path = "/confirmation" element={<PaymentConfirmation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
