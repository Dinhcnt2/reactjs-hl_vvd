import React, { useState } from 'react';
import VvdFormStudent from './VvdFormStudent';

export default function VvdListStudent() {
  // mock data
  const studentsInit = [
    { id: 1, name: "Nguyễn Văn A", age: 20 },
    { id: 2, name: "Trần Thị B", age: 21 },
    { id: 3, name: "Lê Văn C", age: 19 },
    { id: 4, name: "Phạm Thị D", age: 22 },
    { id: 5, name: "Hoàng Văn E", age: 20 }
  ];

  // state
  const [students, setStudents] = useState(studentsInit);

  // add
  const handleSubmit = (param) => {
    console.log("param:", param);
    setStudents([...students, param]); // cập nhật danh sách
  };

  return (
    <div className="alert alert-primary">
      <h2>DANH SÁCH SINH VIÊN</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => (
            <tr key={index}>
              <td>{stud.id}</td>
              <td>{stud.name}</td>
              <td>{stud.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <VvdFormStudent onSubmit={handleSubmit} />
    </div>
  );
}
