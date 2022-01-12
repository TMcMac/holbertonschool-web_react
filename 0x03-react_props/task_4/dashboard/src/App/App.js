import './App.css';
import React from "react";
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';


function App({isLoggedIn}) {
  return (
    <>
      <Notifications displayDrawer={false}/>
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </> 
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;