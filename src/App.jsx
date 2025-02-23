import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; 
import Footer from "./Footer";
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ChatWindow from './ChatWindow'; 

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/chat" element={<ChatWindow />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};
export default App;