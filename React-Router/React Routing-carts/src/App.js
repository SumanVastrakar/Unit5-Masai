import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import DressesCollection from './components/DressesCollection';
import Home from './components/Home';
import DressDesigning from './components/DressDesigning';
import DressAlteration from './components/DressAlteration';
import DressDelivery from './components/DressDelivery';
import DressDetails from './components/DressDetails';
import Error from './components/Error';
import Navbar from './components/Navbar';
import LogIn from './components/Login&Logout/LogIn';
import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';


function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
  
        <Route path="/dressesCollection" element={<DressesCollection />}></Route>
        <Route path="/dressDesigning" element={<DressDesigning />}></Route>
        <Route path="/dressAlteration" element={<DressAlteration />}></Route>
        <Route path="/dressDelivery" element={<DressDelivery/>}></Route>
        <Route path="/dressDetails/:id" element={<PrivateRoutes><DressDetails/></PrivateRoutes>}></Route>
        <Route path="/login" element={<LogIn/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>

    </>
  );
}

export default App;
