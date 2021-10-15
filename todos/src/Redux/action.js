import {v4 as uuid} from 'uuid'

export const addTodo = (data)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id:uuid(),
            data
        }
    }
}
export const deleteTodo = (payload)=>{
    return {
        type:"DELETE_TODO",
        payload
        
    }
}
export const deleteallTodo = ()=>{
    return {
        type:"DELETE_ALL_TODO",
        
    }
}