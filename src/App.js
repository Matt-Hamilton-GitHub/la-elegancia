import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/Home";
import Product from './pages/Product'
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ProductList from './pages/ProductList'
import Pay from "./components/Pay";



function App() {

  const user = true;

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} exact />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        {/* {user ? elemetnt=<Navigate to='/' replace/> : <Route path="/login" element={<Login />} />} */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
    </Routes>  
  </Router>
  );
}

export default App;
