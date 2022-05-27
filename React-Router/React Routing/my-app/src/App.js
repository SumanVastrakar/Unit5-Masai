import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/products"  element={<ProductPage/>} />
    <Route path="/:id"  element={<ProductDetails/>} />
   </Routes>
   
   </>
  );
}

export default App;
