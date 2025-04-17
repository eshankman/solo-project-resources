import React, { Component } from 'react';
import Toggle from './components/toggle';

export default function toggle({ label }) {
  return (
    <div>
      <div className="container">
        <input type="checkbox" className="checkbox" name="{label}" id={label}></input>
      </div>
    </div>
  );
}
