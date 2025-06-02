// Atividade 5/src/Pages/Form2.jsx
import React, { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  }); // [cite: 371]

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    }); // [cite: 375, 377]
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    }); // [cite: 377] (inferred from pattern)
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    }); // [cite: 377] (inferred from pattern)
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        /> {/* [cite: 373] */}
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        /> {/* [cite: 373] */}
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        /> {/* [cite: 373] */}
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p> {/* [cite: 373] */}
    </>
  );
}