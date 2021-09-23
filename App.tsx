import React from 'react';
import './style.css';
import ProjectComponent from './TammComp';
import Hoc from './HOC';

export default function App() {
  const Users = Hoc(ProjectComponent);

  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}
