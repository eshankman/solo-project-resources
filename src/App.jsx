import React from 'react';
import Toggle from './components/Toggle';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div className="bundle">
      <Navbar />
      <Toggle label="theme-toggle" />
    </div>
  );
};

export default App;
