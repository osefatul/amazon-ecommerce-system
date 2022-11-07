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
import Order from './pages/order/Order';
import FilterProduct from './pages/filterProducts/FilterProduct';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';

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

          <Route  path="/register" element={<SignUp/>}/>
          <Route  path="/login" element={<SignIn/>}/>

          <Route  path="/products/:id" 
            element={
            <>
              <Header/>
              <Product/>
          </>}/>


          <Route path="/category" 
            element={
            <>
              <Header/>
              <FilterProduct/>
          </>}/>




          <Route path='/' element = {<ProtectedRoutes/>}>


            <Route  path="/cart" 
              element={
              <>
                <Header/>
                <Cart/>
            </>}/>

            <Route  path="/successfulCheckout" 
              element={
              <>
                <SuccessCheckout/>
            </>}/>

            <Route  path="/orders" 
              element={
              <>
                <Header/>
                <Order/>
            </>}/>


          </Route>

      </Routes>
    </div>
  );
}

export default App;
