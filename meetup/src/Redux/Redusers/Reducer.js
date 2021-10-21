import {useState} from 'react'



export function todoReducer(state = [],action){
    
    switch(action.type){
        case "ADD_TODO" : {
            return [...state,action.payload]
        }
        case "DELETE_TODO" : {
            return state.filter((el)=>el.id != action.payload)
        }
        case "DELETE_ALL_TODO" : {
            return []
        }
        default:return state
    }
}