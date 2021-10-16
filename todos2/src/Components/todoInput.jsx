import { useState } from "react"
import {useDispatch} from 'react-redux' 
import {addTodos} from '../Redux/Actions/todoActions'

export const TodoInput = ()=>{
    
    const [inp,setInp] = useState("")
    const dispatch = useDispatch()
    return (
        <div className="todoInputMain">
            <input onChange={(e)=>{setInp(e.target.value)}} type="text" value={inp} />
            <button onClick={()=>{ dispatch(addTodos(inp))}} className="addBtn">ADD</button>
        </div>
    )
}