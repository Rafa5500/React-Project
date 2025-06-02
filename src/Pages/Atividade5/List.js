import React from 'react';

const people = [
  { id: 1, name: 'Ada Lovelace', profession: 'Matemática' },
  { id: 2, name: 'Grace Hopper', profession: 'Cientista da Computação' },
  { id: 3, name: 'Margaret Hamilton', profession: 'Engenheira de Software' },
];

export default function List() {
  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Lista de Pessoas</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {people.map(person => (
          <li key={person.id}>
            {person.name} — <i>{person.profession}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}
