import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/mainPage';

const App = () => {
  return (
    <div className="bundle">
      <Navbar />
      <MainPage />
    </div>
  );
};

export default App;
