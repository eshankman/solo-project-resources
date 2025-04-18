import React from 'react';

export default function Toggle({ label }) {
  return (
    <div className="container">
      <input type="checkbox" className="checkbox" name={label} id={label} />
    </div>
  );
}
