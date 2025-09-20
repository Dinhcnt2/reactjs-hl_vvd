import React, { useState } from 'react';
import VvdFormStudent from './VvdFormStudent';

export default function VvdListStudent() {
  const studentsInit = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Tran Thi B", age: 21 },
    { id: 3, name: "Le Van C", age: 22 },
  ];

  const [students, setStudents] = useState(studentsInit);

  const handleAddStudent = (newStudent) => {
    setStudents(prev => [...prev, newStudent]); // thêm sinh viên mới
  };

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {students.map(stud => (
            <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.name}</td>
              <td>{stud.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <VvdFormStudent onAddStudent={handleAddStudent} />
    </div>
  );
}
