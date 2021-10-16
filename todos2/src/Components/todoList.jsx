import { useSelector } from "react-redux"
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux"
import { deleteallTodos, deleteTodos } from "../Redux/Actions/todoActions"
import { Link } from "react-router-dom";
export const TodoList = ()=>{
    const todos = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(todos)

    

    return (
        <div className="todoListMain">
            {todos.map((el)=><div style={{display:"flex",justifyContent:"center",lineHeight:"0px",padding:"10px",color:"tomato"}} >
            <Link style={{textDecoration:"none"}} to={`/details/${el.id}`}><h3>{el.data}</h3></Link>
                <Button size="small" variant="contained" style={{marginLeft:"20px"}} onClick={(e)=>{dispatch(deleteTodos(el.id))}}>Delete</Button>
                </div>)
                }
            
            <Button  variant="outlined"  style={{marginTop:"50px",color:"black"}} onClick={()=>{dispatch(deleteallTodos())}}>Delete All</Button>
        </div>
        
    )
}