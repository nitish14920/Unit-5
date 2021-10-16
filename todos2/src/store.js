import {createStore} from 'redux'
import { todoReducer } from './Redux/Redusers/todoReducers'

export const store = createStore(todoReducer)