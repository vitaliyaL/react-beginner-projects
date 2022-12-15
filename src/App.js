import { useState } from 'react';
import './index.scss';
import React from "react"

function App() {
const [count,setCount]=useState(0);
const handleCountPlus=()=>{
setCount(count+1)
}
const handleCountMinus=()=>{
  setCount(count-1)
}
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleCountMinus}>- Минус</button>
        <button className="plus" onClick={handleCountPlus}>Плюс +</button>
      </div>
    </div>
  );
}

export default App;
