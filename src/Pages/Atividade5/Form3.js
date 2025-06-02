import React, { useState } from 'react';

export default function Form3() {
  const [form, setForm] = useState({
    firstName: 'Fulano',
    lastName: 'Silva',
    email: 'fulano@email.com'
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form style={{ textAlign: 'center', margin: '30px auto' }}>
      <input
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Sobrenome"
        style={{ marginLeft: 10 }}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        style={{ marginLeft: 10 }}
      />
      <p>Nome completo: {form.firstName} {form.lastName}</p>
      <p>Email: {form.email}</p>
    </form>
  );
}
