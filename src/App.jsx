import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [answer, setAnswer] = useState(0);

  return (
    <div className="main">
      <div className="line1">Expression</div>

      <div className="line2">Ans</div>

      <div className="line3">
        <div className="">C</div>
        <div className="">+/-</div>
        <div className="">%</div>
        <div className="">/</div>
      </div>

      <div className="line4">
        <div className="">7</div>
        <div className="">8</div>
        <div className="">9</div>
        <div className="">X</div>
      </div>

      <div className="line5">
        <div className="">4</div>
        <div className="">5</div>
        <div className="">6</div>
        <div className="">-</div>
      </div>

      <div className="line6">
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
        <div>+</div>
      </div>

      <div className="line7">
        <div className="">0</div>
        <div className="">.</div>
        <div className="">Ans</div>
        <div className="">=</div>
      </div>
    </div>
  );
}

export default App
