import React from 'react';
import './App.css';
import Person from './Person';
import Button from './Button';
import Header from './Header';
import List from './List';


const App = () => {
  const personData = {
    name: 'Sunil Yalam',
    age: 21,
  };

  const buttonClick = () => {
    alert('Button Clicked!');
  };

  const headerTitle = 'My First React Project';
  const listItems = ['Full Stack', 'Course', 'Pw Skills'];

  return (
    <div>
      <Header title={headerTitle} />
      <Person name={personData.name} age={personData.age} />
      <Button text="Click Me" onclick={buttonClick} />
      <List items={listItems} />
    </div>
  );
};

export default App;