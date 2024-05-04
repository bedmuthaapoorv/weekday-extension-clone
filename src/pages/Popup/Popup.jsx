import React, { useEffect } from 'react';
import './Popup.css';
import services from '../../services/services'
import { Router } from 'react-chrome-extension-router';
import pages from '../pages'
const Popup = () => {
  useEffect(() => {
    services.fetchJobsData()
  }, [])
  return (
    <div>
      <Router>
        <pages.Home></pages.Home>
      </Router>
    </div>
  );
};

export default Popup;
