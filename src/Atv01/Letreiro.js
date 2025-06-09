import React from 'react';

function MeuLetreiro() {
  const h2Ref = React.useRef(null);

  React.useEffect(() => {
    const texto = 'Conheça a Fatec❤️';
    let index = 0;

    function tick() {
      if (h2Ref.current) {
        h2Ref.current.textContent = texto.slice(0, index);
        index++;

        if (index <= texto.length) {
          setTimeout(tick, 100);
        } else {
          setTimeout(() => {
            index = 0;
            tick();
          }, 1000);
        }
      }
    }

    tick();
  }, []);

  return (
    <>
      <h1>Letreiro:</h1>
      <h2 ref={h2Ref}></h2>
    </>
  );
}

export default MeuLetreiro;
