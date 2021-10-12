import React, { useState } from 'react'
import "./App.css"
import { useSelector,useDispatch } from 'react-redux'
import {incNum,decNum,multiplyNum,devideNum} from "./Actions/index"
const App = () => {

  const myState = useSelector((state)=> state.changeTheNumber )
  const dispatch = useDispatch()
  const [inp,setInp] = useState(1) 
  return (
    <div className="container">
      <h1>Counter Using React Redux</h1>
      <input onChange={(e)=>{
        setInp(e.target.value)
      }} className="input    " type="number" placeholder="Enter Number"></input>
      <div className="quantity">
          <button onClick={()=>{
              dispatch(decNum(inp))
          }} className="minus">-</button>
          <input type="text" value={myState}/>
          <button onClick={()=>{
            dispatch(incNum(inp))
          }} className="plus">+</button>
      </div>
      <button onClick={()=>{
            dispatch(multiplyNum(inp))
          }} className="plus">X</button>
          <button onClick={()=>{
            dispatch(devideNum(inp))
          }} className="plus">/</button>
      
    </div>
  )
}

export default App
