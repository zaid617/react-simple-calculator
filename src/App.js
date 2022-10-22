import { useState } from 'react';
import './App.css';

function App() {

    let [result, setResult] = useState("");

    const clickHandler = (e)=>{
      
      setResult(result.concat(e.target.name))
    }

    const clearBox = ()=>{
      setResult("")
    }

    const backSpace = ()=> {
    setResult(result.slice(0, -1).toString());
  }

  const evaluate = ()=>{
    try{
      setResult(eval(result).toString())
    }
    catch(err){
      setResult("Error")
    }
  }



  return (
    <div className="App">
        <div className="container">
        <h1>Calculator</h1>
        <input type="number" className="input" onChange={(e)=>{setResult(e.target.value)}} value={result}/>
        <div className="cal">
            <button className="button color-btn2" onClick={clearBox}>AC</button>
            <button className="button color-btn" onClick={backSpace}>C</button>
            <button className="button color-btn" name='(' onClick={clickHandler}>(</button>
            <button className="button color-btn" name=')' onClick={clickHandler}>)</button>
            <button className="button" name='7' onClick={clickHandler}>7</button>
            <button className="button" name='8' onClick={clickHandler}>8</button>
            <button className="button" name='9' onClick={clickHandler}>9</button>
            <button className="button color-btn" name='*' onClick={clickHandler}>*</button>
            <button className="button" name='4' onClick={clickHandler}>4</button>
            <button className="button" name='5' onClick={clickHandler}>5</button>
            <button className="button" name='6' onClick={clickHandler}>6</button>
            <button className="button color-btn" name='/' onClick={clickHandler}>/</button>
            <button className="button" name='1' onClick={clickHandler}>1</button>
            <button className="button" name='2' onClick={clickHandler}>2</button>
            <button className="button" name='3' onClick={clickHandler}>3</button>
            <button className="button color-btn" name='+' onClick={clickHandler}>+</button>
            <button className="button" name='0' onClick={clickHandler}>0</button>
            <button className="button" name='.' onClick={clickHandler}>.</button>
            <button className="button" name='3.143' onClick={clickHandler}>π</button>
            <button className="button color-btn" onClick={evaluate}>=</button>
        </div>
    </div>
    </div>
  );
}

export default App;
