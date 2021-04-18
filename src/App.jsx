import React, { useState } from 'react'
import './App.css'
import Functions from './components/Functtions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'

function App() {
  const [num, setNum] = useState("0")
  const [value, setValue] = useState(0)
  const [oper, setOper] = useState("")
  const [sw12, setSw12] = useState(true)

  const handleOnClickNumber = (text) => {
    if (text==="+/-") {
      setNum(num*(-1))
      return
    }
    if (sw12) {
      setNum(text)
      setSw12(false)
    }
    else {
      setNum(num.concat(text))
    }
  }

  const handleOnClickOperation = (text) => {
    if (value===0) {
      setValue(num)
    } else {
      evalOperation(oper)
    }
    setOper(text)
    setSw12(true)
  }

  const handleOnClickEqual = () => {
    evalOperation(oper)
    setValue(0)
    setSw12(true)
  }

  const evalOperation = (oper) => {
    let res = 0
    const numT = value
    switch (oper) {
      case "+":
        res = parseFloat(numT) + parseFloat(num)
        break
      case "-":
        res = parseFloat(numT) - parseFloat(num)
        break
      case "x":  
        res = parseFloat(numT) * parseFloat(num)
        break
      case "/":
        res = parseFloat(numT) / parseFloat(num)
        break
      case "%":
        res = parseFloat(numT) / 100
        break
      default:
        break
    }
    setNum(res.toString())
    setValue(res)
  }

  const handleReset = () => {
    setNum("0")
    setValue(0)
    setOper("")
    setSw12(true)
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
      <Functions 
        handleReset={handleReset}
        handleDelOne={handleDelOne}
      />
      <Numbers 
        handleOnClickNumber={handleOnClickNumber}
      />
      <MathOperations
        handleOnClickOperation={handleOnClickOperation}
        handleOnClickEqual={handleOnClickEqual}
      />
    </main>
  )
}

export default App;
