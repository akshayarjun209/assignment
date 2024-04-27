import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Product from './components/Product.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import CartItems from './components/CartItems.jsx';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Product></Product>}></Route> 
            <Route exact path='/electronics' element={<Product category='electronics'></Product>}></Route> 
            <Route exact path='/jewelery' element={<Product category='jewelery'></Product>}></Route> 
            <Route exact path='/menclothing' element={<Product category="men's clothing"></Product>}></Route> 
            <Route exact path='/womenclothing' element={<Product category="women's clothing"></Product>}></Route>
            <Route exact path='/cart' element={<CartItems></CartItems>}></Route>  
        </Routes>
     
     </BrowserRouter>
     </Provider>
  );
}

export default App;
