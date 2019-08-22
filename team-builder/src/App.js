import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//importing components

import Form from './Form';

function App()  {
  const [user, setUser] = useState([{ name: "", email:"", role: ""}]);
  // function that updates user state to a new array 

  // use spread operator to spread state in the array
  const newTeamMember = member => {
    setUser([...user, member])
  }

  
  return (
    
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <Form addMember={newTeamMember} />

    </div>
  );
}

export default App;
