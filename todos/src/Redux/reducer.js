import { loadData, saveData } from "../Utills/localStorage"

const initState = {
    todos:loadData("todos") || []
}

const reducer = (state = initState,{type,payload})=>{
    switch (type){
        case "ADD_TODO":{
            const updatedTodo = [...state.todos,payload]
            saveData("todos",updatedTodo)
            return {
                ...state,
                todos:updatedTodo
            }
        }
        case "DELETE_TODO":{
            const updatedTodo = state.todos.filter((el)=>el.id != payload)
            saveData("todos",updatedTodo)
            return {
                ...state,
                todos:updatedTodo
            }
        }
        case "DELETE_ALL_TODO":{
            const updatedTodo = []
            saveData("todos",updatedTodo)
            return {
                ...state,
                todos:updatedTodo
            }
        }
        default:return state
    }
}

export {reducer}