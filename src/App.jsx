import React, { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState(0);
  const [expression, setExpression] = useState("323x232");
  const [tempAns, setTempAns] = useState(0);
  const [finalAns, setFinalAns] = useState(0);
  const [tempValue, setTempvalue] = useState("");
  const [sign, setSign] = useState("+");

  const clearScreen = () => {
    setSign("+");
    setTempAns(0);
  };

  const changeSign = (e) => {
    setSign(e.target.id);
  };

  const changeToNegative = () => {
    setTempAns(-1 * tempAns);
  };
  const storeValue = (e) =>{
    console.log(e.target.value());
  }

  const calc = () => {};

  return (
    <div className="main">
      <input className="exp" onChange={(e)=>{storeValue(e)}}/>
      <div className="ans">
        <div>Ans</div>
        <div></div>
        <div className="finalAnswer">{tempAns}</div>
      </div>

      <div className="line">
        <div className="a" onClick={() => {clearScreen();}}>C</div>
        <div className="a" onClick={() => {changeToNegative();}}>+/-</div>
        <div className="a" id="%" onClick={() => setTempAns(tempAns / 100)}>%</div>
        <div className="a" id="/"onClick={(e) => {changeSign(e);}}>÷</div>
      </div>

      <div className="line">
        <div className="a" id="7" onClick={(e)=>{}}>7</div>
        <div className="a" id="8">8</div>
        <div className="a" id="9">9</div>
        <div className="a" id="*">X</div>
      </div>

      <div className="line">
        <div className="a" id="4">4</div>
        <div className="a" id="5">5</div>
        <div className="a" id="6">6</div>
        <div className="a" id="-">-</div>
      </div>

      <div className="line">
        <div className="a" id="1">1</div>
        <div className="a" id="2">2</div>
        <div className="a" id="3">3</div>
        <div className="a" id="+">
          +
        </div>
      </div>

      <div className="line1">
        <div className="a" id="0">0</div>
        <div className="a">.</div>
        <div className="a">Ans</div>
        <div className="a">=</div>
      </div>
    </div>
  );
}

export default App;
