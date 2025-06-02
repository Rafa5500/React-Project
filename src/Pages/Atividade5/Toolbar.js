// components/Toolbar.js
import React from 'react';

export default function Toolbar() {
  function onPlayMovie() {
    alert('Iniciando filme...');
  }

  function onUploadImage() {
    alert('Enviando imagem...');
  }

  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <button onClick={onPlayMovie}>Play Movie</button>
      <button onClick={onUploadImage}>Upload Image</button>
    </div>
  );
}
