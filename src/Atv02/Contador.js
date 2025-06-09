import React, { useState } from 'react';
import './Contador.css';

export default function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const alterarContagem = (tipo, valor) => {
    if (tipo === 'homens') {
      setHomens((prev) => Math.max(0, prev + valor));
    } else if (tipo === 'mulheres') {
      setMulheres((prev) => Math.max(0, prev + valor));
    }
  };

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="app-container">
      <div className="contador">
        <button className="botao-reset" onClick={resetar}>
          <img src="/reset.png" alt="Reset" />
        </button>

        <div className="total">Total</div>
        <input className="input-total" type="text" value={total} readOnly />

        <div className="secoes-container">
          <Secao
            label="Homens"
            imagem="/homem.png"
            valor={homens}
            onAlterar={(val) => alterarContagem('homens', val)}
          />
          <Secao
            label="Mulheres"
            imagem="/mulher.png"
            valor={mulheres}
            onAlterar={(val) => alterarContagem('mulheres', val)}
          />
        </div>
      </div>
    </div>
  );
}

function Secao({ label, imagem, valor, onAlterar }) {
  return (
    <div className="secao">
      <img src={imagem} alt={label} />
      <div className="botoes">
        <button onClick={() => onAlterar(1)}>+</button>
        <button onClick={() => onAlterar(-1)}>-</button>
      </div>
      <div>{label}</div>
      <input className="input-contador" type="text" value={valor} readOnly />
    </div>
  );
}