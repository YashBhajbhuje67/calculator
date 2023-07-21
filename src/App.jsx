import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [expression, setExpression] = useState("");
  const [tempAns, setTempAns] = useState(0);

  const clearScreen  = ()=>{
    if (! isClear){
      setIsClear(true);
    }
  }

  return (
    <div className="main">
      <div className="exp">{expression}</div>
      <div className="ans">
        <div>Ans</div>
        <div></div>
        {isClear ? <></>: <div className="finalAnswer">2344</div>}
        
      </div>

      <div className="line">
        <div className="a" onClick={()=>{clearScreen()}}>C</div>
        <div className="a">+/-</div>
        <div className="a">%</div>
        <div className="a">÷</div>
      </div>

      <div className="line">
        <div className="a">7</div>
        <div className="a">8</div>
        <div className="a">9</div>
        <div className="a">X</div>
      </div>

      <div className="line">
        <div className="a">4</div>
        <div className="a">5</div>
        <div className="a">6</div>
        <div className="a">-</div>
      </div>

      <div className="line">
        <div className="a">1</div>
        <div className="a">2</div>
        <div className="a">3</div>
        <div className="a">+</div>
      </div>

      <div className="line1">
        <div className="a">0</div>
        <div className="a">.</div>
        <div className="a">Ans</div>
        <div className="a">=</div>
      </div>
    </div>
  );
}

export default App;
