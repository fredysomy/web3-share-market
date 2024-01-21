// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import UserDashboard from './component/dash';
import NewCompanyPage from './component/create';
import ListingPage from './component/listing';
import StockDataPage from './component/listing_deets';


const Initial = () => {
  return (
    <Router>
      <div>
        {/* Your navigation bar or header can go here */}
        <Routes>
          <Route path="/" exact element={<App/>} />
          <Route path="/dashboard" element = {<UserDashboard/>}/>
          <Route path="/create" element={<NewCompanyPage/>}/>
          <Route path="/listing" element={<ListingPage/>}/>
          <Route path="/listing/:address" element={<StockDataPage/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default Initial;
