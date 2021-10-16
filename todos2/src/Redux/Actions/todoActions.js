import {v4 as uuid} from 'uuid'
export function addTodos(data){
    return {
        type:"ADD_TODO",
        payload:{
            id:uuid(),
            data
        }
    }
}
export function deleteTodos(id){
    return {
        type:"DELETE_TODO",
        payload:id   
    }
}
export function deleteallTodos(){
    return {
        type:"DELETE_ALL_TODO",
    }
}