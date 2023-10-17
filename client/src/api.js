import axios from "axios";

const backendBaseUrl = "http://localhost:3000"; // Update with your backend server URL

// Function to retrieve the user's token from storage
const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : "";
};

// Create an instance of Axios with custom headers
const axiosInstance = axios.create({
  baseURL: backendBaseUrl,
  headers: {
    Authorization: getToken(), // Include the token in the Authorization header
    "Content-Type": "application/json",
  },
});

// Intercept requests to update the token if it changes
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Ticket API functions
export const getTickets = async () => {
  const response = await axiosInstance.get("/api/tickets");
  return response.data;
};

export const createTicket = async (ticketData) => {
  const response = await axiosInstance.post("/api/tickets", ticketData);
  return response.data;
};

// User API functions
export const getUsers = async () => {
  const response = await axiosInstance.get("/api/users");
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/api/users/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post("/api/users/login", userData);
  return response.data;
};

// Payment API functions
export const paymentRequest = async () => {
  const response = await axiosInstance.get("/api/payments");
  return response.data;
};

export const initiatePayment = async (paymentData) => {
  const response = await axiosInstance.post("/api/payments/initiate", paymentData);
  return response.data;
};

// Booking API functions
export const getAllBookings = async () => {
  const response = await axiosInstance.get("/api/bookings/bookings");
  return response.data;
};

export const createBooking = async (bookingData) => {
  const response = await axiosInstance.post("/api/bookings/bookings", bookingData);
  return response.data;
};
// Update a booking by ID
export const updateBooking = async (bookingId, updatedData) => {
  const response = await axiosInstance.put(`/api/bookings/bookings/${bookingId}`, updatedData);
  return response.data;
};

// Delete a booking by ID
export const deleteBooking = async (bookingId) => {
  const response = await axiosInstance.delete(`/api/bookings/bookings/${bookingId}`);
  return response.data;
};
