import React, { useState } from 'react';

export default function VvdFormStudent({ onAddStudent }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // tạo object sinh viên mới
    const newStudent = {
      id: Number(id),
      name: name,
      age: Number(age),
    };

    // gọi hàm parent truyền xuống
    onAddStudent(newStudent);

    // reset form
    setId('');
    setName('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Thêm thông tin sinh viên</h3>
        <p>Id</p>
        <input
          name='id'
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <p>Name</p>
        <input
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <p>Age</p>
        <input
          name='age'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <br /><br />
        <button type="submit">Ghi lại</button>
      </form>
    </div>
  );
}
