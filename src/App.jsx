import React, { Component } from 'react';
import Toggle from './components/Toggle';

const App = () => {
  render() {
    return (
      <React.Fragment>
        <ToggleSwitch label="Notifications" />
        <ToggleSwitch label="Subscribe" />
      </React.Fragment>
    );
  }
}
export default App;
