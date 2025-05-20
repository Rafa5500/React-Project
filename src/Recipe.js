

function Ingredientes({ eaters }) {
  return (
    <ol>
      <li className='li2'>Coloque {eaters} hambúrguer(es) em uma frigideira.</li>
      <li className='li2'>Adicione {2 * eaters} fatias de queijo cheddar sobre os hambúrgueres.</li>
      <li className='li2'>Esquente os hambúrgueres com o queijo até derreter.</li>
      <li className='li2'>Monte os hambúrgueres no pão com tomate e alface.</li>
      <li className='li2'>Sirva com {eaters * 20} batatinhas fritas e uma bebida à escolha!</li>
    </ol>
  );
}

export default function Recipe() {
  return (
    <section>
      <h2 className='titulo'>🍔 Receita de Cheeseburger Favorita dos Heróis</h2>
      <div className='toDoList'>
        <h2 className='tituloh2'>Para dois heróis:</h2>
        <Ingredientes eaters={2} />
        <h2 className='tituloh2'>Para um esquadrão:</h2>
        <Ingredientes eaters={5} />
      </div>
    </section>
  );
}