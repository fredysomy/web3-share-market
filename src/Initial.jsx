// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import UserDashboard from './component/dash';


const Initial = () => {
  return (
    <Router>
      <div>
        {/* Your navigation bar or header can go here */}
        <Routes>
          <Route path="/" exact element={<App/>} />
          <Route path="/dashboard" element = {<UserDashboard/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default Initial;