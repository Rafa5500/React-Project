import './List.css';

function Cup({ guest }) {
  return <h2 className='tituloh2'>Xícara encantada para convidado #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <section>
      <h2 className='titulo'>🍵 Chá Encantado no Reino Doce</h2>
      <div className='toDoList'>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
        <Cup guest={4} />
      </div>
    </section>
  );
}
