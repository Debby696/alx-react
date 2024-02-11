import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <div className="App">
      <Header />
      <Notifications />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </div>
  );
}

// Define propTypes for the App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

// Set a default value for isLoggedIn
App.defaultProps = {
  isLoggedIn: false,
};

export default App;
