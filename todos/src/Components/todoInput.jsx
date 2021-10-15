import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo,deleteTodo,deleteallTodo } from "../Redux/action"

export const TodoInput = ()=>{
    
    const dispatch = useDispatch()
    const [title,setTitle] = useState("")
    return (
        <div>
            <h3>Add Todo</h3>
            <input onChange={(e)=>{ setTitle(e.target.value)}} type="text" placeholder="Enter" value={title} />
            <button onClick={()=>{dispatch(addTodo(title))}}>ADD</button>
        </div>
    )
}