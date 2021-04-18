import React, { useState } from 'react'
import './App.css'
import Functions from './components/Functtions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

function App() {
  const [num, setNum] = useState("0")
  const [value, setValue] = useState("0")
  const [oper, setOper] = useState("")

  const handleOnClickNumber = (text) => {
    if (num==="0" || num==="+" || num==="-" || num==="*" || num==="/" || oper !== "") {
      setNum(text)
    }
    else {
      setNum(num.concat(text))
    }
  }

  const handleOnClickOperation = (text) => {
    setValue(num)
    // setNum(text)
    evalOperation()
    setOper(text)
  }

  const handleOnClickEqual = () => {
    evalOperation()
    setOper("")
  }

  const evalOperation = () => {
    if((value === "0"  && num === "0") || oper === "") return
    let res = 0
    switch (oper) {
      case "+":
        res = parseFloat(value) + parseFloat(num)
        break
      case "-":
        res = parseFloat(value) - parseFloat(num)
        break
      case "*":
        res = parseFloat(value) * parseFloat(num)
        break
      case "/":
        res = parseFloat(value) / parseFloat(num)
        break
      case "%":
        res = parseFloat(value) / 100
        break
      default:
        break
    }
    console.log(res);
    setNum(res.toString())
    setValue(res.toString())
  }

  const handleReset = () => {
    setNum("0")
    setValue("0")
    setOper("")
  }

  const handleDelOne = () => {
    const res = num.split("")
    if (res.length > 1) {
      res.pop()
      setNum(res.join(""))
    } else setNum("0")
  }


  return (
    <main className='react-calculator'>
      <Result value={num}/>
      <Numbers 
        handleOnClickNumber={handleOnClickNumber}
      />
      <Functions 
        handleReset={handleReset}
        handleDelOne={handleDelOne}
      />
      <MathOperations
        handleOnClickOperation={handleOnClickOperation}
        handleOnClickEqual={handleOnClickEqual}
      />
    </main>
  )
}

export default App;
