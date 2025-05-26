import ContadorPessoas from './Pages/Atividade3/ContadorPessoas';
import { Link } from 'react-router-dom';

export default function Atv03() {
  return (
    <>
      <h1>Atividade</h1>
      <ContadorPessoas />
      <br />
      <Link to="/">retornar à página inicial</Link>
    </>
  );
}