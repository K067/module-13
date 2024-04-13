import React from 'react';
import './App.css';
import { List } from './Components/List/List';
import { useContent } from './Components/Hook/useContent';
import { Input } from './Components/Input/Input';

function App() {
  const state = useContent();

  return (
    <div className="container">
      <div className="wrapper">
        <h3>Oepgeev stjorer</h3>
        <Input {...state} />
        <List {...state} />
      </div>
    </div>
  );
}

export default App;
