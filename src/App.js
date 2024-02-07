import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftColumn from './LeftColumn';
import RightContent from './RightContent';
import './App.css';

const App = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set initial active link when the component mounts
    const currentPath = window.location.pathname;
    setActiveLink(currentPath === '/' ? '/profile' : currentPath);
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    // Add smooth scrolling logic here if needed
  };

  return (
    <Router>
      <div className="app-container">
        <LeftColumn activeLink={activeLink} onNavLinkClick={handleNavLinkClick} />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/profile" replace />}
          />
          <Route path="/profile" element={<RightContent activeLink="profile" />} />
          <Route path="/education" element={<RightContent activeLink="education" />} />
          <Route path="/projects" element={<RightContent activeLink="projects" />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;