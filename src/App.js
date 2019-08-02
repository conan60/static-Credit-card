import React from 'react';
import './App.css';

let CardNumber = ()=>{
  return (
    <p className="card-number">
      5098 4352 6345 3442
    </p>
  )
}

let CardValidity = ()=>{
  return (
    <p className="card-validity">
      10/20
    </p>
  )
}

let CardHolder = ()=>{
  return (
    <p className="card-holder">
      Malek Gorchene
    </p>
  )
}

let CardInfo = ()=>{
  return (
    <div className="d-flex">
      <CardHolder/>
      <CardValidity/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="credit-card-bg">
        <CardNumber/>
        <CardInfo/>
      </div>
    </div>
  );
}

export default App;
