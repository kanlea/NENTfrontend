import React from 'react';
import './App.css';

const { getAll, getOne }= require('./db');

function App() {

    var allData = getAll();
    console.log('data is here');
    console.log(allData);

  return ( <div className = "App">
    <header className = "App-header"></header>
    <div className="box">
    <h1>Restaurant API</h1> 

        <div className= "innerBox">
            <p><u>List of restaurants</u><br></br></p>
        </div>
    
    <p><br></br><br></br><br></br><br></br></p>

    </div>
     </div>
  );
}

export default App;
