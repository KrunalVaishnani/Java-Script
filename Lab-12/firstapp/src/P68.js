import React from 'react';

const students = [
  {
    name: 'darshan',
    work: 'freelance-developer',
    websites: '32',
    id: '0',
  },
  {
    name: 'meet',
    work: 'fullstack-developer',
    websites: '12',
    id: '1',
  },
];

function App() {
  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <p>Student Name: {student.name}</p>
          <p>Hackathons participated: {student.hackathons}</p>
        </div>
      ))}
    </>
  );
}

export default App;