// Atividade 5/src/Pages/BucketList.jsx
import React, { useState } from 'react';
import { initialList as artworksInitialList } from './data';

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))} {/* [cite: 453] */}
    </ul>
  );
}

export default function BucketList() {
  const [myList, setMyList] = useState(artworksInitialList);
  // Para ter listas verdadeiramente independentes, copiamos o array inicial
  const [yourList, setYourList] = useState([...artworksInitialList].map(item => ({...item}))); // Deep copy for separate state [cite: 449, 450] (modified for true independence)


  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen }; // [cite: 459]
      } else {
        return artwork; // [cite: 459]
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen }; // [cite: 459]
      } else {
        return artwork; // [cite: 459]
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see: </h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} /> {/* [cite: 452] */}
      <h2>Your list of art to see: </h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} /> {/* [cite: 452] */}
    </>
  );
}