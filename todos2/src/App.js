import { TodoInput } from './Components/todoInput';
import './App.css';
import { TodoList } from './Components/todoList';
import {
  Switch,
  Route,
} from "react-router-dom";
import { TodoDetails } from "./Components/todoDetails";

function App(){
  return (
    <div className="App">
      <Switch>
      <Route  path="/" exact>
          <TodoInput />
          <TodoList/>
      </Route>
      <Route path="/details/:id" >
          <TodoDetails/>
      </Route>
      <Route>404 Page Not Found!</Route>
      </Switch>
    </div>
  );
}

export default App;
