import logo from './logo.svg';
import './App.css';
import { Slider } from './Components/Slider';

function App() {
  const questions = [{id:1,q:"What is Your Name?",a:"Nitish"},{id:2,q:"where do you Live?",a:"Bahadurgarh"},{id:1,q:"what do you do?",a:"I am a Web Developer"}]
  return (
    <div className="App">
     <Slider questions={questions}/>
    </div>
  );
}

export default App;
