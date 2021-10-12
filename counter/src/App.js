import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from 'react-redux'
import {incNum,decNum} from "./Actions/index"
const App = () => {

  const myState = useSelector((state)=> state.changeTheNumber )
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Counter Using React Redux</h1>

      <div className="quantity">
          <button onClick={()=>{
              dispatch(decNum())
          }} className="minus">-</button>
          <input type="text" value={myState}/>
          <button onClick={()=>{
            dispatch(incNum())
          }} className="plus">+</button>
      </div>

      
    </div>
  )
}

export default App
