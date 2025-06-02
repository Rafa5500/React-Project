import React from 'react';

const people = [
  { id: 1, name: 'Ada Lovelace', profession: 'Matemática' },
  { id: 2, name: 'Grace Hopper', profession: 'Cientista da Computação' },
  { id: 3, name: 'Margaret Hamilton', profession: 'Engenheira de Software' },
  { id: 4, name: 'Katherine Johnson', profession: 'Matemática' }
];

export default function List2() {
  const matematicas = people.filter(p => p.profession === 'Matemática');

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Somente Matemáticas</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {matematicas.map(person => (
          <li key={person.id}>
            {person.name} — <i>{person.profession}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}
