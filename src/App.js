import React from 'react';
import './style.css';
import Table from './components/table';
export default function App() {
  const getTodosById = () => {
    console.log(process.env.REACT_APP_NOT_SECRET_CODE);
  };
  return (
    <div>
      {getTodosById()}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Table />
    </div>
  );
}
