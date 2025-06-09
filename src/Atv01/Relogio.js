import React from 'react';

function MeuRelogio() {
  const h2Ref = React.useRef(null);

  React.useEffect(() => {
    const atualizarRelogio = () => {
      if (h2Ref.current) {
        const agora = new Date();
        const horas = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');
        const segundos = agora.getSeconds().toString().padStart(2, '0');
        h2Ref.current.textContent = `${horas}:${minutos}:${segundos}`;
      }
    };

    atualizarRelogio();
    const intervalo = setInterval(atualizarRelogio, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <h1>Relógio:</h1>
      <h2 ref={h2Ref}></h2>
    </>
  );
}

export default MeuRelogio;