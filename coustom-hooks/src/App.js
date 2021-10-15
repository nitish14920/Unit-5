import logo from './logo.svg';
import './App.css';

function useTimer(s){
  
  setTimeout(()=>{

  },s*1000)
}
function App() {
  const timer = useTimer(3)
  return (
    <div className="App">
      {timer ? "welcome":"loading"}
    </div>
  );
}

export default App;
