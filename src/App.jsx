import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState('');
  const [tempAns, setTempAns] = useState(0);  
  const inputRef = useRef(null);

  const clearAllScreen = () => {
    setExpression('');
    setTempAns(0);
    inputRef.current.focus();
  };

  const handleButton  = (num) =>{
    setExpression(expression+num);
    inputRef.current.focus();
  }
  
  const clearScreen = ()=>{
    setExpression('');
    inputRef.current.focus();
  }

  const storeValue = (e) =>{
    const allowedCharsRegex = /[0-9+\-*/\s]/;
    const key = e.key;
    if (allowedCharsRegex.test(key)) {
      setExpression(expression + key);
    } else if (key === 'Enter' || key=== "=" ) {
      calc();
    } else if(key === 'Escape'){
      clearScreen();
    }
    else {
      e.preventDefault();
    }
  }

  const calc = () => {
    try{
      var result = eval(expression);
      setTempAns(result);
    }
    catch(err){
      alert(`Invalid Input ${expression}`)
    }
    inputRef.current.focus();
  };

  return (
    <div className="main">
      <input className="exp" value={expression} ref={inputRef} onKeyDown={(e)=>{storeValue(e)}} autoFocus/>
      <div className="ans">
        <div>Ans</div>
        <div></div>
        <div className="finalAnswer">{tempAns}</div>
      </div>

      <div className="line">
        <div className="a" onClick={() => {clearAllScreen();}}>AC</div>
        <div className="a" onClick={() => {clearScreen();}}>C</div>
        <div className="a" id="%" onClick={() => setTempAns(tempAns / 100)}>%</div>
        <div className="a" id="/" onClick={() => {handleButton('/')}}>÷</div>
      </div>

      <div className="line">
        <div className="a" id="7" onClick={()=>{handleButton(7)}}>7</div>
        <div className="a" id="8" onClick={()=>{handleButton(8)}}>8</div>
        <div className="a" id="9" onClick={()=>{handleButton(9)}}>9</div>
        <div className="a" id="*" onClick={()=>{handleButton('*')}}>X</div>
      </div>

      <div className="line">
        <div className="a" id="4" onClick={()=>{handleButton(4)}}>4</div>
        <div className="a" id="5" onClick={()=>{handleButton(5)}}>5</div>
        <div className="a" id="6" onClick={()=>{handleButton(6)}}>6</div>
        <div className="a" id="-" onClick={()=>{handleButton('-')}}>-</div>
      </div>

      <div className="line">
        <div className="a" id="1" onClick={()=>{handleButton(1)}}>1</div>
        <div className="a" id="2" onClick={()=>{handleButton(2)}}>2</div>
        <div className="a" id="3" onClick={()=>{handleButton(3)}}>3</div>
        <div className="a" id="+" onClick={()=>{handleButton('+')}}>+</div>
      </div>

      <div className="line1">
        <div className="a" id="0" onClick={()=>{handleButton(0)}}>0</div>
        <div className="a" onClick={()=>{handleButton('.')}}>.</div>
        <div className="a" onClick={()=>{handleButton(tempAns)}}>Ans</div>
        <div className="a" onClick={()=>{calc()}} >=</div>
      </div>
    </div>
  );
}

export default App;
