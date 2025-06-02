// Atividade 5/src/Pages/Toolbar.jsx
import React from 'react';

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  ); // [cite: 58]
}

export default function Toolbar() {
  return (
    <div>
      <Button onClick={() => alert('Playing!')}>
        Play Movie
      </Button> {/* [cite: 58] */}
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button> {/* [cite: 58] */}
    </div>
  ); // [cite: 57, 58]
}