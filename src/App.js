import './App.css';
import React  from 'react';
import Person from './components/Person';

let App = ()=>{
  return(
    <div className="App">
      <h1>
        Hello it's a text from header function
      </h1>
      
      <Person name="Mohammad Alamin" age= "23"/>
      <Person name= "Mohammad Arif" age="25"/>
      <Person name="Rahaim Talukdar" age="29"/>
    </div>
  );
}


export default App;
