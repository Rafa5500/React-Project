import './List.css';

function Ingredientes({ eaters }) {
  return (
    <ol>
      <li className='li2'>Prepare {eaters} panquecas mágicas.</li>
      <li className='li2'>Adicione {2 * eaters} gotas de essência de banana.</li>
      <li className='li2'>Aqueça até dourar e liberar o aroma doce.</li>
      <li className='li2'>Sirva com geleia do Reino Doce e creme encantado.</li>
      <li className='li2'>Acompanhe com {eaters * 10} ml de chá encantado da Marceline!</li>
    </ol>
  );
}

export default function Recipe() {
  return (
    <section>
      <h2 className='titulo'>🥞 Receita do Café da Manhã Mágico</h2>
      <div className='toDoList'>
        <h2 className='tituloh2'>Para dois aventureiros:</h2>
        <Ingredientes eaters={2} />
        <h2 className='tituloh2'>Para o Reino todo:</h2>
        <Ingredientes eaters={5} />
      </div>
    </section>
  );
}
