import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup/Signup';
import DashBoard from './pages/DashBoard/DashBoard';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CartDetails from './pages/CartDetails/CartDetails';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/dashboard/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<CartDetails/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
