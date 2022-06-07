import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TodoAdd from './components/TodoAdd';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <div>
   <Routes>
    <Route path = "/" element = {<Navbar/>}></Route>
    <Route path = "/register" element = {<Register/>}></Route>
    <Route path = "/login" element = {<Login/>}></Route>
    <Route path = "/dashboard"  element = {<AllRoutes/>}></Route>
    {/* <Route path="/todoadd" element={<TodoAdd/>}></Route>
    <Route path="/allroutes" element={<TodoAdd/>}></Route> */}
    

   </Routes>
    </div>
  );
}

export default App;
