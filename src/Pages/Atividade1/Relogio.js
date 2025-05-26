import React, { useState, useEffect } from 'react';

export function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  const horaFormatada = horaAtual.toLocaleTimeString('pt-BR');

  return <h2>{horaFormatada}</h2>;
}