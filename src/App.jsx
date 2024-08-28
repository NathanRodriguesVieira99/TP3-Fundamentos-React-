import React, { useState } from 'react';
import Layout from './Components/Layout (ex 3 ao 4)/Layout';
import Shop from './Components/Shop (ex 5 ao 16)/Shop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' && (
        <Layout onNavigate={handleNavigation} />
      )}
      {currentPage === 'shop' && (
        <Shop onNavigate={handleNavigation} />
      )}
    </div>
  );
}

export default App;
