import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';
import {Routes, Route} from "react-router-dom"
import Countdown from './components/Countdown';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Stopwatch/>}></Route>
        <Route path="/countdown" element={<UserInput/>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
