import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path = "/register" element = {<Register/>}></Route>
    <Route path = "/login" element = {<Login/>}></Route>
    <Route path = "/dashboard" element = {<Dashboard/>}></Route>
    
   </Routes>
    </div>
  );
}

export default App;
