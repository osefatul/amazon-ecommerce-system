import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Header from './components/header/Header';
import SignUp from './pages/auth/signUp/SignUp';
import SignIn from './pages/auth/signIn/SignIn';
import Product from './pages/product/Product';
import Cart from "./pages/cart/Cart"
import SuccessCheckout from './pages/successfulCheckout/SuccessCheckout';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path="/" 
          element={
          <>
            <Header/>
            <Home/>
          </>}/>

          <Route exact path="/register" element={<SignUp/>}/>
          <Route exact path="/login" element={<SignIn/>}/>

          <Route exact path="/products/:id" 
            element={
            <>
              <Header/>
              <Product/>
          </>}/>


          <Route exact path="/cart" 
            element={
            <>
              <Header/>
              <Cart/>
          </>}/>


          
          <Route exact path="/successfulCheckout" 
            element={
            <>
              <SuccessCheckout/>
          </>}/>

      </Routes>
    </div>
  );
}

export default App;
