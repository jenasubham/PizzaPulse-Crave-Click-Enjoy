import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import {CartContext} from './CartContext'


function App() {
const [cart, setCart] = useState({})

useEffect(()=>{
  const cart = localStorage.getItem('cart'); 
  setCart(JSON.parse(cart));

},[])
  
useEffect(()=>{
  localStorage.setItem('cart', JSON.stringify(cart));
  
},[cart])

return (
    <>
      <Router>
        <CartContext.Provider value= {{ cart, setCart }}>

        <Navigation/>
        <Routes>
          <Route path="/" Component = {Home} />  
          <Route path="/products" Component={Products}/>
          <Route path="/cart" Component={Cart}/>
        </Routes>

        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App
