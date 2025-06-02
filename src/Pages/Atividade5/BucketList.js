import React, { useState } from 'react';

const initialItems = [
  { id: 0, title: 'Visitar o Japão', picked: false },
  { id: 1, title: 'Aprender violão', picked: false },
  { id: 2, title: 'Fazer paraquedismo', picked: true },
];

export default function BucketList() {
  const [items, setItems] = useState(initialItems);

  function handleToggle(id) {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, picked: !item.picked }
        : item
    ));
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Minha Lista de Desejos</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item.id}>
            <label style={{ cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={item.picked}
                onChange={() => handleToggle(item.id)}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
