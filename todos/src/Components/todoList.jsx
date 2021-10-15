import { useSelector } from "react-redux"
import { deleteTodo ,deleteallTodo} from "../Redux/action"
import { useDispatch } from "react-redux"
export const TodoList = ()=>{
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()
    return (
        <div>
            {todos.map((el)=><div style={{display:"flex",justifyContent:"center",lineHeight:"0px",padding:"10px",color:"tomato"}}>
                <h3>{el.data}</h3>
                <button style={{height:"30px",marginLeft:"2vw", background:"teal",color:"whitesmoke"}} onClick={()=>{dispatch(deleteTodo(el.id))}}>Delete</button>
                </div>)
                }
            
            <button style={{height:"30px",marginTop:"3vw",background:"black",color:"white"}} onClick={()=>{dispatch(deleteallTodo())}}>Delete All</button>
        </div>
        
    )
}