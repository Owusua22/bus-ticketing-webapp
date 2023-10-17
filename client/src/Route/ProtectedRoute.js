
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Function to check if the user is authenticated (e.g., based on the presence of a token)
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Returns true if a token is present
};

// ProtectedRoute component to wrap routes that require authentication
const ProtectedRoute = ({ path, element }) => {
  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" /> // Redirect to the login page if not authenticated
  );
};
ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    element: PropTypes.element.isRequired,
  };
export default ProtectedRoute;
