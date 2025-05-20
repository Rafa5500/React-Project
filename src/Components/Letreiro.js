import React, { useEffect, useState } from 'react';

export function Letreiro() {
  const textoCompleto = "Conheça a Fatec ❤️";
  const [texto, setTexto] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTexto(textoCompleto.slice(0, index + 1));
      setIndex((index + 1) % (textoCompleto.length + 1));
    }, 200);

    return () => clearTimeout(timer);
  }, [index]);

  return <h2>{texto}</h2>;
}