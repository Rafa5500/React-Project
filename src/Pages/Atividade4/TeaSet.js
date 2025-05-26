
function Cup({ guest }) {
  return <h2 className='tituloh2'>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <section>
      <h2 className='titulo'>🍵 Tea Set for Heroes</h2>
      <div className='toDoList'>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
        <Cup guest={4} />
      </div>
    </section>
  );
}