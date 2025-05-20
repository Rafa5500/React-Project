import { Letreiro } from './Components/Letreiro';
import { Link } from 'react-router-dom';

export default function Atv02() {
  return (
    <>
      <h1>Atividade 02</h1>
      <Letreiro />
      <br />
      <Link to="/">retornar à página inicial</Link>
    </>
  );
}