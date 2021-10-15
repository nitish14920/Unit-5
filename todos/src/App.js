import { TodoInput } from './Components/todoInput';
import './App.css';
import { TodoList } from './Components/todoList';

function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
