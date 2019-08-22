import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

//importing components

import Form from './Form';
import Card from './component/Card';

function App()  {
  const [teamMember, setTeamMember] = useState([{ name: "John", email:"john@awesome.com", role: "awesomesauce", id:1}]);
  // function that updates user state to a new array 

  // use spread operator to spread state in the array
  const newTeamMember = member => {
    setTeamMember([...teamMember, member])
  }

  
  return (
    
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Team Builder</p>
       
      </header>
      <Form addMember={newTeamMember} />
      <Card teamMembers={teamMember} />

    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDom.render(<App/>, rootElement)
