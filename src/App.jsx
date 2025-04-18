import React, { Component } from 'react';
import Toggle from './components/Toggle';

const App = () => {
  return (
    <React.Fragment>
      <Toggle label="Notifications" />
      <Toggle label="Subscribe" />
    </React.Fragment>
  );
};

export default App;
