import React, { useEffect } from 'react';
import './Popup.css';
import services from '../../services/services'
const Popup = () => {
  useEffect(() => {
    services.fetchJobsData()
  }, [])
  return (
    <div>
      Hi
    </div>
  );
};

export default Popup;
