import React, { useState } from 'react';
import PessoaContador from './PessoaContador';
import PainelTotal from './PainelTotal';
import { Link } from 'react-router-dom';
import './ContadorPessoas.css';
import imgHomem from './homem.png';
import imgMulher from './mulher.png';

export default function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const resetarGeral = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <PainelTotal total={homens + mulheres} />

      <div className="contadores" /*style={{ display: 'flex', justifyContent: 'center' }}*/>
        <PessoaContador
          titulo="Homens"
          quantidade={homens}
          incrementar={() => setHomens(homens + 1)}
          decrementar={() => setHomens(Math.max(homens - 1, 0))}
          resetar={() => setHomens(0)}
          imagem={imgHomem}
        />

        <PessoaContador
          titulo="Mulheres"
          quantidade={mulheres}
          incrementar={() => setMulheres(mulheres + 1)}
          decrementar={() => setMulheres(Math.max(mulheres - 1, 0))}
          resetar={() => setMulheres(0)}
          imagem={imgMulher}
        />
      </div>

      <button
        onClick={resetarGeral}
        style={{ marginTop: 20, backgroundColor: 'red', color: 'white', padding: '10px 20px' }}
      >
        Reset Geral
      </button>

      <br /><br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}
