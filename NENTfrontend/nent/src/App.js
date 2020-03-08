import React from 'react';
import './App.css';

const { getAll, getOne }= require('./db');

function App() {

    console.log('data is here');

    var cursor = getOne();
    console.log(cursor);

  return ( <div className = "App">
    <header className = "App-header"></header>
    <div className="box">
    <h1>Restaurant API</h1> 
    <p><br></br><br></br><br></br><br></br></p>

    </div>
     </div>
  );
}

export default App;
