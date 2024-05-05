import React from 'react';
import './Popup.css';
import { Router } from 'react-chrome-extension-router';
import pages from '../pages'
// Entry file
const Popup = () => {
  return (
    <div>
      <Router>
        <pages.Home></pages.Home>
      </Router>
    </div>
  );
};

export default Popup;
