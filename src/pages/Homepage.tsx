import React, { useState } from 'react';
import AuthModal from '../components/AuthModal';
import './pages.css/Homepage.css';

const Homepage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = (success: boolean) => {
    setIsAuthenticated(success);
  };

  return (
    <div className="homepage">
      {!isAuthenticated && <AuthModal onAuth={handleAuth} />}
      <p className="dealer-text">Dealer</p>
    </div>
  );
};

export { Homepage };