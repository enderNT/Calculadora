import './App.css';
import React, {useState} from 'react'

const App = () => {

  const [resultado, setResultado] = useState('')

  const handleClickCalc = (e) => {
    setResultado(resultado.concat(e.target.name))
  }

  const handleClickClear = () => {
    setResultado('')
  }

  const handleClickC = () => {
    setResultado(resultado.slice(0, -1))
  }

  const handleClickCalculate= () => {
    setResultado(eval(resultado).toString());
  }

  return(
  <div className="calculadora">
        <input className='calculadora__resultado' disabled value={resultado}/>
        <button className='calculadora__clear' onClick={handleClickClear}>Clear</button>
        <button className='calculadora__c' onClick={handleClickC}>C</button>
        <button name='1' onClick={handleClickCalc}>1</button>
        <button name='2' onClick={handleClickCalc}>2</button>
        <button name='3' onClick={handleClickCalc}>3</button>
        <button name ='+' className='calculadora__suma' id='operador' onClick={handleClickCalc}>+</button>
        <button name='4' onClick={handleClickCalc}>4</button>
        <button name='5' onClick={handleClickCalc}>5</button>
        <button name='6' onClick={handleClickCalc}>6</button>
        <button name='-' className='calculadora__resta' id='operador' onClick={handleClickCalc}>-</button>
        <button name='7' onClick={handleClickCalc}>7</button>
        <button name='8' onClick={handleClickCalc}>8</button>
        <button name='9' onClick={handleClickCalc}>9</button>
        <button name='*' className='calculadora__multiplicacion' id='operador' onClick={handleClickCalc}>*</button>
        <button name='0' onClick={handleClickCalc} id='cero'>0</button>
        <button name='.' className='calculadora__punto' id='operador' onClick={handleClickCalc}>.</button>
        <button name='/' className='calculadora__division' id='operador' onClick={handleClickCalc}>/</button>
        <button className='calculadora__igual' id='operador' onClick={handleClickCalculate}>=</button>
    </div>
    )
}
export default App;
