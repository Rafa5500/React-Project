// Atividade 5/src/Pages/Form.jsx
import React, { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice'); // [cite: 291]
  const [message, setMessage] = useState('Hello'); // [cite: 291]
  const [isSent, setIsSent] = useState(false); // [cite: 247]

  function handleSubmit(e) {
    e.preventDefault(); // [cite: 292]
    setIsSent(true);
    // Original example used setTimeout to simulate sending
    // For the "Your message is on its way!" message, 
    // we rely on isSent state.
    // The alert from the "State as Snapshot" section:
    // setTimeout(() => {
    //   alert(`You said ${message} to ${to}`);
    // }, 5000);
  } // [cite: 292]

  if (isSent) {
    return <h1>Your message is on its way!</h1>; // [cite: 248]
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select> {/* [cite: 293] */}
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      /> {/* [cite: 249, 293] */}
      <button type="submit">Send</button> {/* [cite: 249, 293] */}
    </form>
  ); // [cite: 248, 249, 293]
}