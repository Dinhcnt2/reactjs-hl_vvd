import React, { useState } from 'react';

export default function VvdFormStudent({ onSubmit }) {
  // state
  const [id, setId] = useState('');
  const [name, setName] = useState('Định đây');
  const [age, setAge] = useState('');

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ép kiểu số để đảm bảo dữ liệu đúng
    const obj = {
      id: Number(id),
      name: name,
      age: Number(age),
    };

    onSubmit(obj);

    // Reset form
    setId('');
    setName('');
    setAge('');
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <h3>Thêm thông tin</h3>

        <p>
          ID:
          <input
            type="number"
            name="id"
            value={id}
            onChange={(ev) => setId(ev.target.value)}
            required
          />
        </p>

        <p>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />
        </p>

        <p>
          Age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(ev) => setAge(ev.target.value)}
            required
          />
        </p>

        <button type="submit">Ghi lại</button>
      </form>
    </div>
  );
}
