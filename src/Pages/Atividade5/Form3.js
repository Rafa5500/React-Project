// Atividade 5/src/Pages/Form3.jsx
import React, { useState } from 'react';

export default function Form3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/SdlAgU0m.jpg',
    }
  }); // [cite: 380, 385]

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    }); // [cite: 386]
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    }); // [cite: 386]
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    }); // [cite: 386]
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    }); // [cite: 387]
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        /> {/* [cite: 388] */}
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        /> {/* [cite: 388] */}
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        /> {/* [cite: 388] */}
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        /> {/* [cite: 388] */}
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p> {/* [cite: 388] */}
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      /> {/* [cite: 388] */}
    </>
  );
}