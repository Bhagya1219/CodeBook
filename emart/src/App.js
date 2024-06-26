
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom'
import Products  from './component/Products';

function App() {
  return (
    <>
     <Navbar/>
     <Routes>      
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>      
     </Routes>
    </>
  );
}

export default App;
